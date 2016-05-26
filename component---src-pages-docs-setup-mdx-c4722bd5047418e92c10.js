"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[1209],{57313:function(e,a,t){t.r(a),t.d(a,{pageTitle:function(){return c},_frontmatter:function(){return s},default:function(){return h}});var r=t(63366),n=(t(67294),t(64983)),i=t(28819),o=t(75609),p=["components"],c="Setting up a project",s={},d=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)}},m=d("Tip"),l=d("Tabs"),k=d("TabPane"),g=d("CodeBlock"),u={pageTitle:c,_frontmatter:s},v=i.Z;function h(e){var a=e.components,t=(0,r.Z)(e,p);return(0,n.kt)(v,Object.assign({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setting-up-a-project",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h1",href:"#setting-up-a-project","aria-label":"setting up a project permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Setting up a project"),(0,n.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#requirements"},"Requirements"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#choosing-the-artifacts"},"Choosing the artifacts"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#setting-up-with-a-build-system"},"Setting up with a build system"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#configure--parameters-javac-option"},"Configure -parameters javac option")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#intellij-idea"},"IntelliJ IDEA")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#using-maven-bom-for-simpler-dependency-management"},"Using Maven BOM for simpler dependency management")))),(0,n.kt)("h2",{id:"requirements",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#requirements","aria-label":"requirements permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Requirements"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://adoptopenjdk.net/"},"Java 8 (or later)")," is required to build and run an application based on Armeria."),(0,n.kt)(m,{mdxType:"Tip"},(0,n.kt)("p",null,"Use Java 13 (or later) if you are a contributor who tries to build Armeria itself.\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/blob/master/CONTRIBUTING.md"},"CONTRIBUTING.md")," for more information.")),(0,n.kt)("h2",{id:"choosing-the-artifacts",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#choosing-the-artifacts","aria-label":"choosing the artifacts permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Choosing the artifacts"),(0,n.kt)("p",null,"All Armeria JARs are available in ",(0,n.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.linecorp.armeria%20-shaded"},"Maven Central Repository"),"\nunder group ID ",(0,n.kt)("inlineCode",{parentName:"p"},"com.linecorp.armeria")," so that you can fetch them easily using your favorite build tool.\nAdd the Armeria artifacts that provide the desired functionality to your project dependencies. The following is\nthe list of major Armeria artifacts which might interest you:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"th"},"Artifact ID")),(0,n.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The core library."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-brave"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Distributed tracing with Brave.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced-zipkin"},"Zipkin integration"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-dropwizard2"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Provides a Dropwizard 2 Bundle around ",(0,n.kt)("inlineCode",{parentName:"p"},"armeria-jetty9"),".\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced-dropwizard-integration"},"Using Armeria with Dropwizard"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-eureka"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Eureka based service discovery.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/client-service-discovery#eureka-based-service-discovery-with-eurekaendpointgroup"},"Eureka service discovery")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-service-registration#eureka-based-service-registration-with-eurekaupdatinglistener"},"Eureka service registration"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-grpc"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"gRPC client and server support.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-grpc"},"Running a gRPC service"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"/docs/client-grpc"},"Calling a gRPC service"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-jetty9"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Embedded Jetty 9 Servlet container.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-servlet"},"Embedding a servlet container"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-kafka"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Enables sending access logs to Kafka"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-kotlin"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Kotlin support.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-annotated-service#kotlin-coroutines-support"},"Kotlin coroutines support"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-logback"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Provides Logback ",(0,n.kt)("inlineCode",{parentName:"p"},"Appender")," implementation that adds\nrequest information.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced-logging"},"Logging contextual information"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-protobuf"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Support Protocol Buffers in annotated service."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-retrofit2"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Allows using Armeria instead of OkHttp as transport layer\nwhen using Retrofit2.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/client-retrofit"},"Retrofit integration"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-rxjava3"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"RxJava 3 plugin"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-saml"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"SAML support"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-scalapb_2.12")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"armeria-scalapb_2.13"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Support ScalaPB for gRPC and annotated service."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-spring-boot2-autoconfigure"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Spring Boot 2 integration"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-spring-boot2-webflux-autoconfigure"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Spring Boot 2 WebFlux integration. See\n",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced-spring-webflux-integration"},"Using Armeria with Spring WebFlux"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-thrift0.13"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Thrift 0.13 client and server support.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-thrift"},"Running a Thrift service"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"/docs/client-thrift"},"Calling a Thrift service"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-tomcat9"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Embedded Tomcat 9 Servlet container.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-servlet"},"Embedding a servlet container"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"armeria-zookeeper3"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"ZooKeeper 3 based service discovery.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/client-service-discovery#zookeeper-based-service-discovery-with-zookeeperendpointgroup"},"ZooKeeper service discovery")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-service-registration#zookeeper-based-service-registration-with-zookeeperupdatinglistener"},"ZooKeeper service registration"),"."))))),(0,n.kt)("h2",{id:"setting-up-with-a-build-system",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#setting-up-with-a-build-system","aria-label":"setting up with a build system permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Setting up with a build system"),(0,n.kt)("p",null,"You might want to use the following build file as a starting point when you set up a new project:"),(0,n.kt)(l,{mdxType:"Tabs"},(0,n.kt)(k,{tab:"Gradle",key:"gradle",mdxType:"TabPane"},(0,n.kt)(g,{language:"groovy",filename:"build.gradle",mdxType:"CodeBlock"},"\n    apply plugin: 'java'\n    apply plugin: 'idea'\n    apply plugin: 'eclipse'\n\n    repositories {\n        mavenCentral()\n    }\n\n    dependencies {\n        // Adjust the list as you need.\n        ['armeria',\n        'armeria-brave',\n        'armeria-grpc',\n        'armeria-jetty9',\n        'armeria-kafka',\n        'armeria-logback',\n        'armeria-retrofit2',\n        'armeria-rxjava3',\n        'armeria-saml',\n        'armeria-thrift0.13',\n        'armeria-tomcat9',\n        'armeria-zookeeper3'].each {\n            implementation \"com.linecorp.armeria:${it}:"+o["com.linecorp.armeria:armeria-bom"]+"\"\n        }\n\n        // Logging\n        runtimeOnly 'ch.qos.logback:logback-classic:"+o["ch.qos.logback:logback-classic"]+"'\n        runtimeOnly 'org.slf4j:log4j-over-slf4j:"+o["org.slf4j:log4j-over-slf4j"]+"'\n    }\n    ")),(0,n.kt)(k,{tab:"Maven",key:"maven",mdxType:"TabPane"},(0,n.kt)(g,{language:"xml",filename:"pom.xml",mdxType:"CodeBlock"},'\n    <project xmlns="http://maven.apache.org/POM/4.0.0"\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n\n      <modelVersion>4.0.0</modelVersion>\n      <groupId>com.example</groupId>\n      <artifactId>myproject</artifactId>\n      <version>1.0-SNAPSHOT</version>\n      <packaging>jar</packaging>\n      <name>myproject</name>\n      <url>https://example.com/</url>\n\n      <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n      </properties>\n\n      <dependencies>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria</artifactId>\n          <version>'+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-brave</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-grpc</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-jetty9</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-kafka</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-logback</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-retrofit2</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-rxjava3</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-saml</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-thrift0.13</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-tomcat9</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-zookeeper3</artifactId>\n          <version>"+o["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        \x3c!-- Logging --\x3e\n        <dependency>\n          <groupId>ch.qos.logback</groupId>\n          <artifactId>logback-classic</artifactId>\n          <version>"+o["ch.qos.logback:logback-classic"]+"</version>\n          <scope>runtime</scope>\n        </dependency>\n        <dependency>\n          <groupId>org.slf4j</groupId>\n          <artifactId>log4j-over-slf4j</artifactId>\n          <version>"+o["org.slf4j:log4j-over-slf4j"]+"</version>\n          <scope>runtime</scope>\n        </dependency>\n      </dependencies>\n    </project>\n    "))),(0,n.kt)("h2",{id:"configure--parameters-javac-option",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#configure--parameters-javac-option","aria-label":"configure  parameters javac option permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Configure ",(0,n.kt)("inlineCode",{parentName:"h2"},"-parameters")," javac option"),(0,n.kt)("p",null,"You can configure your build tool to add ",(0,n.kt)("inlineCode",{parentName:"p"},"-parameters")," javac option as follows."),(0,n.kt)(l,{mdxType:"Tabs"},(0,n.kt)(k,{tab:"Gradle",key:"gradle",mdxType:"TabPane"},(0,n.kt)(g,{language:"groovy",filename:"build.gradle",mdxType:"CodeBlock"},"\n    tasks.withType(JavaCompile) {\n        options.compilerArgs += '-parameters'\n    }\n    ")),(0,n.kt)(k,{tab:"Maven",key:"maven",mdxType:"TabPane"},(0,n.kt)(g,{language:"xml",filename:"pom.xml",mdxType:"CodeBlock"},"\n    <project>\n      <build>\n        <plugins>\n          <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <configuration>\n              <compilerArgs>\n                <arg>-parameters</arg>\n              </compilerArgs>\n            </configuration>\n          </plugin>\n        </plugins>\n      </build>\n    </project>\n    "))),(0,n.kt)("h3",{id:"intellij-idea",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h3",href:"#intellij-idea","aria-label":"intellij idea permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"IntelliJ IDEA"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Preferences")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Build, Execution, Deployment")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Compiler")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Java Compiler"),"\nand add ",(0,n.kt)("inlineCode",{parentName:"p"},"-parameters")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Additional command line parameters"),"."),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.282208588957054%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB10lEQVQoz5WSzW6cMBRGeZx0W0Vtw/BjAzYYG7CByUymSRSpyiJRd32bLKqqfdBTQX6UaLpoFkeWvPh8vnsd9fMVfnvNMF/RTZeE3Q3KbUmlogsjhW4QlUaq+r+Ier/Fjztk1ZLkmlQopLIkouRLkhFn4l1EcX9PffhB6u85Nbd8bG757O6Ii5ZNlrPJ5buIPhweyO5+U3z/w+m3X5x8/cnJ4YFP6pwkSznLBJtcsMmOiV+dL4ZL1TBf0HYThbJU2q31RakpdE1eVGv1s2fS/Ij41aORrEeWxSxk1UAsHbkO5GVN4zqcD5huoG4dte3QxlI1LcpYVNOiW0dWVE+hkkhqjxsP65ZtOLCRFqEDiVQo02KHgO09/TjT+XENKlS9hjyTiII4e5qh0AMuHFbMsCcpFkNPIipqa/HTFtd7/DQzjNNquJi9qbzWfiSqzLTahfPr1XQJFPWjYeNnunmPHXc0w0Tdj+guUJiOpGxIlSGt3hK1w55hvqQ0E7IO5GogLTvivKJwAbOEhXOE6V8xINuBVLsjIusvVsOm36HdlsqMCO3ZiArjevowo22H6Txt72lcv7LcZYU6YjWc9jcswdrO61LSsmeTl+uwl6H/6wMnuSSV5RF/AZwltgRZb32NAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"intellij javac parameters",title:"intellij javac parameters",src:"/static/c778c5e23b435ba68d076f014b3a3824/a6d36/intellij_javac_parameters.png",srcSet:["/static/c778c5e23b435ba68d076f014b3a3824/222b7/intellij_javac_parameters.png 163w","/static/c778c5e23b435ba68d076f014b3a3824/ff46a/intellij_javac_parameters.png 325w","/static/c778c5e23b435ba68d076f014b3a3824/a6d36/intellij_javac_parameters.png 650w","/static/c778c5e23b435ba68d076f014b3a3824/e548f/intellij_javac_parameters.png 975w","/static/c778c5e23b435ba68d076f014b3a3824/3c492/intellij_javac_parameters.png 1300w","/static/c778c5e23b435ba68d076f014b3a3824/133ae/intellij_javac_parameters.png 1424w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("h2",{id:"using-maven-bom-for-simpler-dependency-management",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#using-maven-bom-for-simpler-dependency-management","aria-label":"using maven bom for simpler dependency management permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using Maven BOM for simpler dependency management"),(0,n.kt)("p",null,"You can import ",(0,n.kt)("inlineCode",{parentName:"p"},"com.linecorp.armeria:armeria-bom")," into your build rather than specifying Armeria versions in\nmore than one place. See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html#sub:bom_import"},"this article"),"\nfor Gradle and ",(0,n.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-maven-bom"},"this article")," for Maven to learn more about what\nMaven BOM is and how to use it."))}h.isMDXComponent=!0},28819:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(25444),n=t(67294),i=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-graphql"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}'),o=t(46731),p=function(e){var a=(0,r.useStaticQuery)("1217743243").allMdx.nodes;return n.createElement(o.Z,Object.assign({},e,{candidateMdxNodes:a,index:i,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-setup-mdx-c4722bd5047418e92c10.js.map