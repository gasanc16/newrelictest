let mocks = {
    appData: [
        {
            "name": "Small Fresh Pants - Kautzer - Boyer, and Sons",
            "contributors": ["Edwin Reinger", "Ofelia Dickens", "Hilbert Cole", "Helen Kuphal", "Maurine McDermott Sr."],
            "version": 7,
            "apdex": 68,
            "host": ["7e6272f7-098e.dakota.biz", "9a450527-cdd9.kareem.info", "e7bf58af-f0be.dallas.biz"]
        }, {
            "name": "Refined Concrete Shirt - Hudson - Sauer, Group",
            "contributors": ["Ramon Harris DDS", "Summer Dicki", "Triston Sipes", "Fae Lind", "Carole Emard"],
            "version": 6,
            "apdex": 57,
            "host": ["e0419f48-6a5a.craig.info", "7e6272f7-098e.dakota.biz"]
        }, {
            "name": "Ergonomic Wooden Soap - Lemke and Sons, Inc",
            "contributors": ["Miss Moises Walter", "Caroline Murazik"],
            "version": 2,
            "apdex": 61,
            "host": ["e7bf58af-f0be.dallas.biz", "b0b655c5-928a.nadia.biz", "95b346a0-17f4.abbigail.name"]
        }, {
            "name": "Rustic Soft Sausages - Pagac, O'Keefe and Schaefer, LLC",
            "contributors": ["Ms. Toby Weissnat", "Archibald Dicki"],
            "version": 4,
            "apdex": 55,
            "host": ["95b346a0-17f4.abbigail.name", "128406fc-0d3f.tiana.biz", "e7bf58af-f0be.dallas.biz"]
        }
    ],

    hostList: new Set([
        '7e6272f7-098e.dakota.biz',
        '9a450527-cdd9.kareem.info',
        'e7bf58af-f0be.dallas.biz',
        'e0419f48-6a5a.craig.info',
        'b0b655c5-928a.nadia.biz',
        '95b346a0-17f4.abbigail.name',
        '128406fc-0d3f.tiana.biz'
    ]),

    appsByHost: { 
        '7e6272f7-098e.dakota.biz': [ 
            { 
                name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
                contributors: ["Edwin Reinger", "Ofelia Dickens", "Hilbert Cole", "Helen Kuphal", "Maurine McDermott Sr."],
                version: 7,
                apdex: 68,
                host: ["7e6272f7-098e.dakota.biz", "9a450527-cdd9.kareem.info", "e7bf58af-f0be.dallas.biz"]
            },
            { 
                name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
                contributors: ["Ramon Harris DDS", "Summer Dicki", "Triston Sipes", "Fae Lind", "Carole Emard"],
                version: 6,
                apdex: 57,
                host: ["e0419f48-6a5a.craig.info", "7e6272f7-098e.dakota.biz"]
            } 
        ],
        '9a450527-cdd9.kareem.info': [ 
            { 
                name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
                contributors: ["Edwin Reinger", "Ofelia Dickens", "Hilbert Cole", "Helen Kuphal", "Maurine McDermott Sr."],
                version: 7,
                apdex: 68,
                host: ["7e6272f7-098e.dakota.biz", "9a450527-cdd9.kareem.info", "e7bf58af-f0be.dallas.biz"]
            } 
        ],
        'e7bf58af-f0be.dallas.biz': [ 
            {
                name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
                contributors: ["Edwin Reinger", "Ofelia Dickens", "Hilbert Cole", "Helen Kuphal", "Maurine McDermott Sr."],
                version: 7,
                apdex: 68,
                host: ["7e6272f7-098e.dakota.biz", "9a450527-cdd9.kareem.info", "e7bf58af-f0be.dallas.biz"]
            },
            { 
                name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
                contributors:  ["Miss Moises Walter", "Caroline Murazik"],
                version: 2,
                apdex: 61,
                host: ["e7bf58af-f0be.dallas.biz", "b0b655c5-928a.nadia.biz", "95b346a0-17f4.abbigail.name"]
            },
            { 
                name: 'Rustic Soft Sausages - Pagac, O\'Keefe and Schaefer, LLC',
                contributors: ["Ms. Toby Weissnat", "Archibald Dicki"],
                version: 4,
                apdex: 55,
                host: ["95b346a0-17f4.abbigail.name", "128406fc-0d3f.tiana.biz", "e7bf58af-f0be.dallas.biz"]
            } 
        ],
        'e0419f48-6a5a.craig.info': [ 
            { 
                name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
                contributors: ["Ramon Harris DDS", "Summer Dicki", "Triston Sipes", "Fae Lind", "Carole Emard"],
                version: 6,
                apdex: 57,
                host: ["e0419f48-6a5a.craig.info", "7e6272f7-098e.dakota.biz"]
            } 
        ],
        'b0b655c5-928a.nadia.biz': [ 
            {
                name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
                contributors:  ["Miss Moises Walter", "Caroline Murazik"],
                version: 2,
                apdex: 61,
                host: ["e7bf58af-f0be.dallas.biz", "b0b655c5-928a.nadia.biz", "95b346a0-17f4.abbigail.name"]
            } 
        ],
        '95b346a0-17f4.abbigail.name': [ 
            { 
                name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
                contributors:  ["Miss Moises Walter", "Caroline Murazik"],
                version: 2,
                apdex: 61,
                host: ["e7bf58af-f0be.dallas.biz", "b0b655c5-928a.nadia.biz", "95b346a0-17f4.abbigail.name"]
            },
            { 
                name: 'Rustic Soft Sausages - Pagac, O\'Keefe and Schaefer, LLC',
                contributors: ["Ms. Toby Weissnat", "Archibald Dicki"],
                version: 4,
                apdex: 55,
                host: ["95b346a0-17f4.abbigail.name", "128406fc-0d3f.tiana.biz", "e7bf58af-f0be.dallas.biz"]
            } 
        ],
        '128406fc-0d3f.tiana.biz': [ 
            { 
                name: 'Rustic Soft Sausages - Pagac, O\'Keefe and Schaefer, LLC',
                contributors: ["Ms. Toby Weissnat", "Archibald Dicki"],
                version: 4,
                apdex: 55,
                host: ["95b346a0-17f4.abbigail.name", "128406fc-0d3f.tiana.biz", "e7bf58af-f0be.dallas.biz"]
            } 
        ]
    },

    topAppByHost:  [ 
        { 
            name: 'Rustic Soft Sausages - Pagac, O\'Keefe and Schaefer, LLC',
            contributors: ["Ms. Toby Weissnat", "Archibald Dicki"],
            version: 4,
            apdex: 55,
            host: ["95b346a0-17f4.abbigail.name", "128406fc-0d3f.tiana.biz", "e7bf58af-f0be.dallas.biz"]
        } 
    ],

    addedHost: [
        {
            name: 'Some app Name',
            contributors: ['Mr. Developer'],
            version: 42,
            apdex: 38,
            host: ['987654.fancy.host']
        }
    ]
};

module.exports = mocks;

