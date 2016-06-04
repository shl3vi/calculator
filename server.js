var fs = require('fs');
var builder = require('xmlbuilder');
var xml2js = require('xml2js');

var XML = require('pixl-xml');

var TOMCAT_USER_XML = "tomcat-users.xml";
/*

var xml_string = '<?xml version="1.0"?>' +
'<tomcat-users>' + 
'<role rolename="manager"/>' +
'<role rolename="admin"/>' +
'<role rolename="manager-gui"/>' + 
'<role rolename="manager-script"/>' +
'<user username="admin" password="admin" roles="admin,manager,manager-gui,manager-script"/>' +
'</tomcat-users>';

 var doc = XML.parse( xml_string );
 console.log( doc );
*/

var a = 
{ 
    role:
    [ 
        { rolename: 'manager' },
        { rolename: 'admin' },
        { rolename: 'manager-gui' },
        { rolename: 'manager-script' } 
    ],
    user:
        {   username: 'admin',
            password: 'admin',
            roles: 'admin,manager,manager-gui,manager-script' 
        }
}

var builder = new xml2js.Builder();
var xml = builder.buildObject(a);
fs.writeFile(__dirname + "/" + TOMCAT_USER_XML , xml, function(){});