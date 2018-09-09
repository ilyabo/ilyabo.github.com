import * as React from 'react'
import styled from 'react-emotion'

const CV = styled('div')`
  padding:50px;
  font:14px/1.5 Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight:300;
  padding:20px;
  padding-bottom:0;
  font-size:13px;

  h1 {
    text-align:center;
    font-size:18pt;
    margin-bottom: 10px;
  }
  h2.subtitle {
    font-variant: normal; text-align: center; margin-top: 0; font-weight: normal;
    font-size: 15px;
  }
  h2 {
    text-align:left;
    font-size:14pt;
    font-variant: small-caps;
    margin-top:0px;
    margin-bottom:5px;
  }
  h3 {
    text-align:left;
    font-size:12pt;
  }
  div.content {
    clear:both;
    margin-top:0px;
    padding-top:20px;
    padding-bottom:0;
  }
  div.block {
    margin-top:0px;
    margin-bottom:20px;
    padding-left:30px;
    padding-top:0px;
  }
  div.infoL {
    text-align:left;
    float:left;
  }
  div.infoR {
    text-align:right;
    position:absolute;
    right:30px;
    top:70px;
  }
  span.flabel {
    font-style:italic;
    margin-right: 5px;
  }
  span.em {
    font-weight:bold;
  }
  span.pubTitle {
    font-style:italic;
  }
  span.wtime {
    font-style:italic;
  }
  ul {
    margin-top: 0em;
    margin-bottom: 0em;

    list-style: circle;
 }

 .notitles ul {
  padding-left: 18px;
 }

  div.jobTitle {
    margin:0px;
    padding:0px;
  }
  a, a:visited, a:link { color:#17589a;  text-decoration: none;  }
`

const Resume = () => {
  return (
    <CV>
      <h1>Ilya Boyandin</h1>

      <div className="infoR">
        ilyabo@gmail.com<br/>
        <a href="http://ilya.boyandin.me" target="_blank" rel="noopener">ilya.boyandin.me</a><br/>
        <a href="https://twitter.com/ilyabo" target="_blank" rel="noopener">@ilyabo</a>
      </div>

      <h2 className="subtitle">Visualization software developer and researcher</h2>


      <br/>
      <div className="content">

        <h2>Education</h2>

        <div className="block">
          <span className="em">PhD in Computer Science, University of Fribourg, Switzerland, 2013</span><br/>
          <span className="flabel">Thesis title:</span> Visualization of Temporal Origin-Destination Data<br/>

          <span className="flabel">Summary:</span>
          Carried out an in-depth study of temporal origin-destination data
          which can represent movement of people, energy, material, etc between locations in geographic space.
          Developed <a target="_blank" href="http://ilya.boyandin.me/works/2011/10/07/flowstrates">Flowstrates</a>,
          a novel approach for visualizing and exploring temporal origin-destination data.
          Carried out a qualitative <a target="_blank" href="http://onlinelibrary.wiley.com/doi/10.1111/j.1467-8659.2012.03093.x/abstract">user study</a> comparing animated and small-multiple
          representations of changes in flow maps.

        </div>

        <div className="block">
          <span className="em">MSc Computer Science, St. Petersburg State University, Russia, 2003</span><br/>
          <span className="flabel">Thesis title:</span> Statistical Query Transformations for Question Answering in the Web<br/>

          <span className="flabel">Summary:</span>
          Developed an improvement for a state-of-the-art algorithm transforming natural language questions into search engine queries achieving a better quality of <a target="_blank" href="http://en.wikipedia.org/wiki/Question_answering">question answering</a>.
        </div>



        <h2>Experience</h2>


        <div className="block">



          <div className="jobTitle"><span className="em">Staff Engineer for Front End and Data Visualization, Teralytics,
          Zurich, Switzerland</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">since February 2015</span></div>
          <ul>
            <li>Developing exploratory data visualization tools for the analysis of people mobility.</li>
            {
              // <!--* Developed Tera Streets-->
              // <!--* Developed Tera Transport-->
              // <!--* Established a scalable architecture and component model for the frontend apps-->
              // <!--* Developed the data backends for the frontend apps including database modelling, data api services, db queries, data aggregation, caching solutions, query optimizations-->
              // <!--* Implemented Tableau integration for the frontend apps including automatic SSO authentication-->
              // <!--* Developed a vector tiles server serving street geometries to the frontend apps-->
              // <!--* Developed a unified login service for user authentication for all the frontend apps-->
              // <!--* Managed the deployment of all the developed apps and services on our web server.-->
            }
          </ul>


          <br/>




          <div className="jobTitle"><span className="em">Data Visualization Engineer, Interactive Things,
          Zurich, Switzerland</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">June 2013 - January 2015</span></div>
          <ul>
            <li>Developed numerous interactive visualizations for Neue Zürcher Zeitung, e.g.
              a series of <a target="_blank" href="http://work.interactivethings.com/nzz-swiss-maps/">geograpic visualizations about Switzerland</a>,
              <a target="_blank" href="http://maps.nzzdali.ch.global.prod.fastly.net/nzzdata/erster-weltkrieg/">Interactive timeline of WWI</a>,
              pieces on  <a target="_blank" href="http://www.nzz.ch/europa-arbeitslosigkeit-juni-2013-1.18108725">unemployment</a> and <a target="_blank" href="http://maps.nzzdali.ch/nzzdata/sommerserie-2014/medical-care/">medical care</a>.</li>
            <li>Developed an <a target="_blank" href="../works/images/snf/snf.png">exploratory data analysis tool</a> for Swiss National Science Foundation related to research proposals and activities.</li>
            <li>Developed a <a target="_blank" href="http://expertisenkarte.zhaw.ch">visualization of research expertise</a> for Zurich University of Applied Sciences. </li>
            <li>Developed <a target="_blank" href="http://www.gemeinwohl.ch/">Public Value Atlas</a> for University of St. Gallen</li>
            <li>Developed an interactive visualization of the  <a target="_blank" href="http://lab.interactivethings.com/global-trade-africa/">trade of the world's countries with Africa.</a></li>
          </ul>


          <br/>


          <div className="jobTitle"><span className="em">PhD Student, Assistant,
    	University of Fribourg, Switzerland</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">April 2009 - May 2013</span></div>
          <ul>
            <li> Developed <a target="_blank" href="http://code.google.com/p/jflowmap/">JFlowMap</a>, an experimental tool for the visualization of spatial interactions.</li>
            <li>Developed web-based <a target="_blank" href="http://ilya.boyandin.me/works/2012/09/01/aiddata">visualizations of AidData</a>
              (financial aid given to developing countries).</li>
            <li>Contributed to the <a target="_blank" href="http://code.google.com/p/birdeye/">BirdEye</a> visualization library developed at the UN Centre for Advanced Visual Analytics.
              {/*<!-- Making the animated graph layouts from the previous library version work within the new framework based on the*/}
              {/*<a target="_blank" href="http://www.springer.com/statistics/computanional+statistics/book/978-0-387-24544-7">Grammar of Graphics</a>.-->*/}
            </li>
            <li>Assisted in courses on <a target="_blank" href="http://diuf.unifr.ch/main/diva/teaching/courses/technologies-multimedia-propedeutiques">Web technologies</a> and <a target="_blank" href="http://diuf.unifr.ch/main/diva/teaching/courses/programmation-fonctionnelle">Functional programming</a>. Tutoring, giving occasional lectures, preparing materials, building supporting websites and utilities.</li>
            {/*<!--<li>Developing a webapp with  (randomly generated) exercises for the students on XML, XSLT, and SVG and with the ability to run a competition and see the*/}
            {/*students' ranking updating in real-time.</li>-->*/}
            <li>Helped to organize and tutoring in workshops on programming and computer graphics for students and school children.</li>
            <li>Technical maintenance of the <a target="_blank" href="http://diuf.unifr.ch/main/diva/">research group website</a>.</li>
          </ul>

          <br/>


          <div className="jobTitle"><span className="em">Senior Software Engineer, Technical Team Leader, IT Department, University of Applied Sciences FH Joanneum, Graz, Austria</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">March 2007 - April 2009</span></div>
          <ul>
            <li>Developed web applications used by the students, lecturers
              and employees of the university for the online administration.
              {
                // <!--Usability was the main concern and the feedback from the users was very positive.-->
              }
            </li>
            <li>Maintained the web and database server infrastructure for the online administration.</li>
            <li>Designed and developed a web application
              for collaborative data collection and consolidation
              which provided a statistical overview of
              study- and research-relevant indicators.
              {
                // <!--The data model allowed the administrators to define what kind of data was collected depending on the occupations of the employees. -->
              }

            </li>
          </ul>

          <br/>

          <div className="jobTitle"><span className="em">Software Engineer/Research Assistant, Dept of Information Design, University of Applied Sciences FH Joanneum, Graz, Austria</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">September 2005 - March 2007</span></div>
          <ul>
            <li>Designed and developed <a target="_blank" href="http://code.google.com/p/cgvis">CGVis</a>, a visualization tool facilitating hierarchical clustering, zooming and animation for the exploration of multidimensional datasets.
              {
                //               <!--The tool
                // facilitates hierarchical clustering, zooming and animation to help the users to explore their datasets.-->
                //               <!--The tool is now freely available under GPL at
                //                 <a target="_blank" href="http://code.google.com/p/cgvis">http://code.google.com/p/cgvis</a>.-->
              }
            </li>

            <li>Designed and developed a <a target="_blank" href="http://ilya.boyandin.me/works/2007/02/26/proclassify/">standalone</a> and a <a target="_blank" href="http://ilya.boyandin.me/works/2007/02/25/proclassifyweb">web</a> version of a proteomic data classification tool implementing a cancer diagnosis method based on mass-spectrometry data facilitating multi-step feature reduction and SVM classification.
              {
                //                     <!--which implements a data reduction algorithm developed at the Institute for Genomics and Bioinformatics (TU Graz) and uses SVM for
                // the subsequent sample classification. -->
              }
              The tool achieves 99% classification accuracy on the NCI Cancer SELDI-TOF study dataset.

              {
                //                 <!--Both the standalone and the web versions are
                // available at the <a target="_blank" href="http://genome.tugraz.at/proclassify/proclassify_description.shtml">
                // IGB website.</a>-->
              }

            </li>

            <li>Participated in the development of a <a target="_blank" href="http://ilya.boyandin.me/works/2007/03/25/fhlite">presentation management tool</a> for the information screens installed at the university.
              Developed the visual layout editor for arranging multimedia
              objects on the screen and the schedule editor similar to calendar in Outlook.

            </li>

            <li>Improved the implementation of an algorithm detecting the behavior type  of a user looking at a web page
              {
                // <!-- (skimming, reading, searching, or learning)-->
                // <!--Implemented a visualization of the web page reading process.-->
              }
              based on the real-time eye-tracking data.
              {/*<!--<li>Migrated the <a target="_blank" href="http://adele.fh-joanneum.at/">AdeLE project website</a>*/}
              {/*from static HTML to XML and XSLT using a self-developed Java XSLT-engine.-->*/}
            </li>
          </ul>

          <br/>

          <div className="jobTitle"><span className="em">Software Engineer, Ecofinance Finanzsoftware &amp; Consulting GmbH, Graz, Austria</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">June 2004 - August 2005</span></div>
          <ul>
            <li>
              Participated in the development of a web based treasury system for Deutsche Bahn and Commerzbank.
            </li>
            <li>
              Implemented the Java infrastructure and XSLT stylesheets for the runtime generation of the front end
              UI code from XML sources.

            </li>
            <li>
              Evaluated and optimized the performance of the XSL transformations.
            </li>
            <li>
              Implemented support for long running jobs on the server-side of the system.
            </li>
            <li>
              Developed the context-sensitive help for the system and the help authoring infrastructure based on DocBook.

            </li>
          </ul>

          <br/>

          <div className="jobTitle"><span className="em">Software Engineer, Elbrus MCST (by contract with Sun Microsystems), St. Petersburg, Russia</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">August 2003 - May 2004</span></div>
          <ul>
            <li>
              Worked in the Sun's <a href="https://en.wikipedia.org/wiki/Swing_(Java)" target="_blank">Java Swing UI library</a> maintenance team. Was responsible for fixing bugs
              and implementing requests for enhancements in the button classes
              (JButton, JRadioButton, JCheckBox, etc). Fixed a total of about 50 bugs in the Sun JDK.
            </li>
          </ul>
          <br/>

          <div className="jobTitle"><span className="em">Software Engineer, Aloha, St. Petersburg, Russia</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">January 2001 - July 2003 (during studies)</span></div>
          <ul>
            <li>
              Designed and developed a web based e-commerce system with
              {
                // <!--user authentication and authorization, -->
              }
              order tracking, credit card processing, back-office,
              inventory, statistical reports, etc.
              Developed the whole system from scratch, supported
              and customized it adapting it to changing requirements. The system is still in use on several e-commerce websites.
            </li>
          </ul>
          <br/>

          <div className="jobTitle"><span className="em">Web Developer, ALife, St. Petersburg, Russia</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">March 2000 - January 2001 (during studies)</span></div>
          <ul>
            <li>
              Participated in the development of a system of intelligent agents
              capable of chatting to visitors of a website in a natural language and
              promoting its products.
              Implemented a highly dynamic web-interface for the subsystem that
              controlled the chats and let operators intervene in a chat
              if a bot was in trouble.
            </li>
          </ul>
          <br/>

          <div className="jobTitle"><span className="em">Teacher, Anichkov Lyceum, St. Petersburg, Russia</span>
            &nbsp;&ndash;&nbsp;
            <span className="wtime">September 1998 - April 2000 (during studies)</span></div>
          <ul>
            <li>
              Taught school children programming.
            </li>
          </ul>
          <br/>
        </div>



        <h2>Computer Skills</h2>
        <div className="block">
          <span className="em">Languages #1: </span> JavaScript, Java, Clojure<br/>
          <span className="em">Languages #2: </span> Scala, PHP, Perl, C, Python<br/>
          <span className="em">Web:</span> React.js, Node.js, Backbone, Underscore, jQuery, Express, Compojure, Spring, Wicket, HTML5<br/>
          <span className="em">Visualization:</span> D3, SVG, Tableau, Piccolo2D, Prefuse<br/>
          <span className="em">GIS:</span> PostGIS, TopoJSON, Polymaps, OpenStreetMap, Google Maps API, QGIS, OpenJUMP<br/>
          <span className="em">Databases:</span> PostgreSQL, MySQL, SQL Server, BigQuery, MongoDB<br/>
        </div>



        <h2>Publications</h2>
        <div className="block">

          <span className="pubTitle"><a target="_blank" href="http://onlinelibrary.wiley.com/doi/10.1111/j.1467-8659.2012.03093.x/abstract">A Qualitative Study on the Exploration of Temporal Changes in Flow Maps with Animation and Small-Multiples</a></span>,
          Ilya Boyandin, Enrico Bertini, Denis Lalanne.<br/>
          Computer Graphics Forum, International Journal of the Eurographics Association,
          Eurographics/IEEE-VGTC Symposium on Visualization, Vienna, Austria, June 2012.
          <br/><br/>

          <span className="pubTitle"><a target="_blank" href="http://onlinelibrary.wiley.com/doi/10.1111/j.1467-8659.2011.01946.x/abstract?deniedAccessCustomisedMessage=&userIsAuthenticated=false">Flowstrates: An Approach for Visual Exploration of Temporal Origin-Destination Data</a></span>,
          Ilya Boyandin, Enrico Bertini, Peter Bak, Denis Lalanne.<br/>
          Computer Graphics Forum, International Journal of the Eurographics Association,
          Eurographics/IEEE-VGTC Symposium on Visualization, Bergen, Norway, June 2011.
          <br/><br/>


          {            // <!--<span className="pubTitle"><a target="_blank" href="http://ilya.boyandin.me/papers/jflowmap-eurovis10-poster.pdf">Visualizing the World’s Refugee Data with JFlowMap</a></span>,
            // Ilya Boyandin, Enrico Bertini, Denis Lalanne.<br/>
            // Poster Abstract at Eurographics/IEEE-VGTC Symposium on Visualization, Bordeaux, France, June 2010.
            // <br/><br/>
            // -->
          }
          <span className="pubTitle"><a target="_blank" href="http://diuf.unifr.ch/main/diva/sites/diuf.unifr.ch.main.diva/files/jflowmap-geova10.pdf">Using Flow Maps to Explore Migrations Over Time</a></span>,
          Ilya Boyandin, Enrico Bertini, Denis Lalanne.<br/>
          Workshop in Geospatial Visual Analytics: Focus on Time, GeoVA(t), Guimarães, Portugal, May 2010.
          <br/><br/>

          <span className="pubTitle"><a target="_blank" href="http://rcdl.ru/doc/2003/B3.pdf">Statistical Query Transformations for Question Answering in the Web</a></span> (in Russian),
          <a target="_blank" href="http://ilya.boyandin.me/assets/cv/simqa.pdf">slides</a> (in English),
          Ilya Boyandin, Igor Nekrestyanov.<br/>
          Fifth Russian Conference on Digital Libraries (RCDL'2003),
          St. Petersburg, Russia, October 2003.

        </div>


        <h2>Recent Talks</h2>
        <div className="block notitles">
          <ul>
            <li><span className="pubTitle"><a target="_blank" href="https://www.youtube.com/watch?v=UdFxjsf5vsA">Visualizing People Movement with React</a></span> at <a target="_blank" href="http://www.meetup.com/Zurich-ReactJS-Meetup/events/226391438/">React.js Meetup</a> in Zurich, 2015</li>
            <li><span className="pubTitle"><a target="_blank" href="https://www.youtube.com/watch?v=dcLrbiHIX5M">Interactive Data Visualization with React: Taming the Complexity of the Changing State</a></span> at <a target="_blank" href="http://openvisconf.com/">OpenVis Conf 2015</a> in Boston</li>
            <li><span className="pubTitle"><a target="_blank" href="http://bit.ly/devcon14-vis">Data Visualization for Media: Processes and Tools</a></span> at <a target="_blank" href="https://tech.ebu.ch/devcon14">EBU DevCon 2014</a>  in Geneva</li>
            <li><span className="pubTitle"><a target="_blank" href="http://bit.ly/sichh">Making Sense of Data with Visualization</a></span> at SICHH Forum Data Visualization & Big Data, 2014</li>
            <li><span className="pubTitle">Workshop on UI development with Reagent in ClojureScript</span> at Clojure Meetup in Zurich, 2014</li>
          </ul>
        </div>

        <h2>Conference Participation</h2>
        <div className="block notitles">
          <ul>
            <li>Presented at visualization conferences: OpenVis, EuroVis, VisWeek, AGILE GeoVA</li>
            <li>Participated in developers conferences: Devoxx, Scala Days, SpringOne, JavaPolis, The Graphical Web</li>
          </ul>
        </div>


        <h2>Other Activities</h2>
        <div className="block notitles">
          <ul>
            <li>Developed an interactive <a target="_blank" href="http://remittances.herokuapp.com/?en">visualization of the worldwide remittance flows</a></li>
            which was published by the newspapers <a target="_blank" href="http://www.tageswoche.ch/de/2013_19/schweiz/540004/milliarden-aus-der-fremde.htm">TagesWoche.ch</a> and <a target="_blank" href="http://derstandard.at/1363710784566/Wieviel-Geld-Migranten-zurueck-in-ihre-Heimat-schicken">derStandard.at</a>.
            <li>Developed a <a target="_blank" href="http://ilya.boyandin.me/works/2012/03/30/swiss-trains">visualization of SBB train flows</a> in a team of several developers at the Make Opendata Camp in Zurich.</li>
            <li>
              {
                // <!--Participated in the organization of the Russian Information Retrieval Evaluation Sembit.ly/sichhinar (ROMIP) and-->
              }
              Maintained the <a target="_blank" href="http://www.romip.ru/en/index.html">website</a> of the Russian Information Retrieval Evaluation Seminar with the use of a self-made Java XSLT-engine.
              {/*<!-- <a target="_blank" href="http://www.romip.ru/en/index.html">the website of the seminar</a> which is still in active use.-->*/}
            </li>
            <li>
              Developed <a target="_blank" href="http://pof.sourceforge.net">phpObjectForms</a>, an open-source
              library for building user-friendly web forms.
              {
                // <!--  The library was then downloaded more than 10000 times.-->
              }
            </li>
          </ul>
        </div>

        <h2>Spoken Languages</h2>
        <div className="block notitles">
          <ul>
            <li>Russian (mother tongue)</li>
            <li>English (full professional proficiency)</li>
            <li>German (full professional proficiency)</li>
            <li>French (intermediate)</li>
          </ul>
        </div>

        <h2>Legal</h2>
        <div className="block">
          Work authorization for Switzerland
        </div>

        <h2>Hobbies</h2>
        <div className="block">
          <a target="_blank" href="http://soundcloud.com/ibananti">Composing</a>,
          <a target="_blank" href="http://www.flickr.com/photos/ibananti/sets/">photography</a>,
          hiking, traveling.
        </div>


      </div>

    </CV>
  )
}

export default Resume

