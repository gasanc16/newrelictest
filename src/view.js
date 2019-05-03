let viewUtils = require('./viewUtils');

const TOP_APPS_NUMBER = 5;

let view = {
    displayData: function(appsByHost) {
        this.addContentToDom(appsByHost);
        this.addAppElementClick();
        this.addCheckBoxListener();
    },

    cleanContainer: function() {
        viewUtils.getElementById('container').innerHTML = '';
    },
    
    createHostContainer: function(name) {
        let $listContainer = viewUtils.createElement('ul');
        let $hostTitle = viewUtils.createElement('div');
        let $hostName = document.createTextNode(name);
        let $hostContainer = viewUtils.createElement('div');
    
        $listContainer.setAttribute('class', 'apps-list');
        $hostTitle.appendChild($hostName);
        $hostTitle.setAttribute('class', 'host-title')
        $hostContainer.setAttribute('id', name);
        $hostContainer.setAttribute('class', 'host-container');
        $hostContainer.appendChild($hostTitle);
        $hostContainer.appendChild($listContainer);
    
        return $hostContainer;
    },
    
    createAppItem: function(app) {
        let $listElement = viewUtils.createElement('li');
        let $appApdex = document.createTextNode(app.apdex);
        let $appName = document.createTextNode(app.name);
        let $apdex = viewUtils.createElement('div');
        let $name = viewUtils.createElement('div')
        
        $apdex.setAttribute('class', 'app-apdex');
        $apdex.appendChild($appApdex);
        $name.setAttribute('class', 'app-name')
        $name.appendChild($appName);
        $listElement.setAttribute('class', 'list-item')
        $listElement.setAttribute('data-version', app.version);
        $listElement.appendChild($apdex)
        $listElement.appendChild($name);
    
        return $listElement;
    },
    
    addAppsToContainer: function($container, $app) {
        $container.getElementsByClassName('apps-list')[0].appendChild($app);
    },
    
    addContentToDom: function(appsByHost) {
        this.cleanContainer();
        let $sectionContainer = viewUtils.getElementById('container');
        
        Object.keys(appsByHost).forEach(appName => {
            let appsList = appsByHost[appName].slice(0, TOP_APPS_NUMBER);
            let $hostContainer = this.createHostContainer(appName); 
    
            appsList.forEach(app => {
                this.addAppsToContainer($hostContainer, this.createAppItem(app));
            });
    
            $sectionContainer.append($hostContainer);
        });
    },
    
    addCheckBoxListener: function() {
        let $checkBox = viewUtils.getElementById('changeDisplayType');
    
        $checkBox.onclick = (event) => {
            this.toogleListType(event.target.checked);
        };
    },

    toogleListType: function(toogle) {
        const LIST_CLASS = 'show-as-list';
        let $sectionContainer = viewUtils.getElementById('container');

        if (toogle) {
            viewUtils.addClassToElement($sectionContainer, LIST_CLASS);
        } else {
            viewUtils.removeClassFromElement($sectionContainer, LIST_CLASS);
        }
    },
    
    addAppElementClick: function() {
        for (let item of viewUtils.getElementsByClass('list-item')) {
            item.onclick = (event) => {
                event.stopPropagation();
                let appVersion = event.currentTarget.getAttribute('data-version');
                alert('App release version: ' + appVersion);
            };
        }
    }
};

module.exports = view;
