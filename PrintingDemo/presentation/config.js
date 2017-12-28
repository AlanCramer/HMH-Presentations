
var activePage = 0;

var pages = [
    { title: 'Introduction', bullets: [] },
    { title: 'Goals of POC', bullets: [
        'Validate theory works',
        'Improve accuracy of estimates of Production Stories',
        'Identify and isolate tricky spots',
        'Reduce unknowns',
        'Design to Facilitate Code Reuse',
    ] },
    { title: 'Review of Existing Web Reports', bullets: [
        'Web Display vs Print Display',
        'Review Web Report Architecture',
    ] },
    { title: 'Our Planned Technology Stack', bullets: [
        'AWS Lambda - with Node (v4.x) Environment',
        'PhantomJS',
        'Node / Express for Lambda Web Server',
        'Angular / D3',
        'Intellify - indirectly through report data model'
    ] },
    { title: 'Sidebar : Some PDF Generation Technologies', bullets: [
        '<b>PhantomJS</b> - Headless Browser with PDF Export (HTML to PDF)',
        '<b>wkhtmltopdf</b> - Headless Browser with PDF Export (HTML to PDF)',
        '<b>PDFKit</b> - scripting language to create PDF',
        '<b>PDFMake</b> - PDFKit plus more',
        'Others - <ul style=\'font-size:smaller\'><li>Snappy (wkhtmltopdf wrapper)</li>' +
            '<li>DocRaptor (commercial service)</li>' +
            '<li>wicked_pdf (ruby scripting)</li></ul>',
        '<span class=\'comment\'>Comment: Consistency Requirement implies Server Side Solution</span>',
        '<span class=\'comment\'>Comment: Code Reuse implies Headless Browser Approach</span>',
        '<span class=\'comment\'>Comment: Both Phantom and WK use (versions of) QTWebkit</span>'
    ] },
    { title: 'Design of Proposed Architecture', bullets: [
        '<b>Client (Scent-client or Demo-Client)</b> - has data model and UI to request PDF',
        '<b>TLSP (Demo-Server)</b> - Obtains Signed URLs to S3 Bucket, 2 uploads and 1 download',
        '<b>Client</b> - uploads model and print request, starts polling',
        '<b>Lambda</b> - Triggered on Print Request, starts lambda-web-server, phantom',
        '<b>Lambda Web Server</b> - Serves Local Reports in Stand Alone App',
        '<b>Phantom</b> - Generates PDF file on lambda disk',
        '<b>Lambda</b> - notified of phantom complete, copies file back to S3',
        '<b>Client</b> - discovers file readiness, downloads'
    ] },
    { title: 'Demo', bullets: [] },
    { title: 'Performance Considerations', bullets: [
        'Measurement Strategies - Report Gen Time, AWS Cost (?)',
        'Worst Report',
        'Under Load - Simultaneous Requests (Prove out Lambda)',
        'Lambda Container Reuse --> Phantom Instance (Web-Server) Reuse',
        'Experiment: How does PDF generation time scale with Memory (processor?)',
        'Experiment: How does PDF generation time scale with Load?'
    ] },
    { title: 'Build and Deploy Notes', bullets: [
        '<b><u>Today</u></b>:',
        'gulp build',
        'npm run zip',
        'aws \'upload-new-lambda-zip\'',
        'node demo-server.js',
        '<b><u>Tomorrow<u></b>:',
        'maven',
        'Releng deploy per environment',
        'terraform (?)'
    ] },
    { title: 'Testing Strategies', bullets: [
        'Stand alone app unit testing (karma / jasmine)',
        'Lambda handler unit testing (karma / jasmine)',
        'Phantom stress testing with scripted model files',
        'Can we auto-test anything about the pdf (beyond existance)?',
        'We want to identify and build robustness for non-happy-path scenarios'
    ] },
    { title: 'Next Steps', bullets: [
        'Table Breaking',
        'Header / Footer Strategies',
        'Deployment Game Plan',
        'Design the Clean up S3 Strategy',
        'Shared code including CSS (extract new repo?)',
        'Scent-Client refactor (remove table data)',
        'Write and Estimate Stories'
    ] },
    { title: 'Issues / Concerns', bullets: [
        'Phantom not a fully modern browser',
        'For example, Flexbox support',
        'Phantom hard to debug',
        'Detecting and Handling Failure Modes',
        'For example, Need a strategy for No PDF created'
    ] }
];

// write the intro slide
pages[0].bullets = pages.map(function (d) { return d.title; });
