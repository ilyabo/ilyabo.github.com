import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'
import profilePic from '../assets/profile-pic.jpg'
import { rhythm } from '../utils/typography'
import flowstratesPdf from './p/flowstrates/flowstrates-eurovis11-fin.pdf'
import jflowmapPdf from './p/jflowmap/jflowmap-geova10.pdf'
import Layout from '../components/Layout'



const Header = styled('div')`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: ${rhythm(25)})  {
    flex-direction: column;
    & > * + * {
      margin-top: ${rhythm(0.5)}; 
    }
    div {
      align-items: center !important;
    }
  }
  
`
const Contact = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Title = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 18pt;
  align-items: center;
  margin-bottom: 10px;
  h2.subtitle {
    margin-top: 5px;
    font-variant: normal; 
    font-weight: normal;
    font-size: 15px;
  }
`

const CV = styled('div')`
  // padding:50px;
  font-weight:300;
  // padding:20px;
  // padding-bottom:0;
  font-size:15px;

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
    li {
      margin: 0 0 0px 0;
    }
 }

 .notitles ul {
  // padding-left: 18px;
 }

  div.jobTitle {
    margin:0 0 10px 0;
    padding:0px;
  }
`

const Go = ({ to, children }) =>
  <a href={to} target="_blank" rel="noopener">{children}</a>

const Resume = (props) => {
  return (
    <Layout location={props.location}>
      <CV>
        <Header>
          <Link to="/">
            <img
              src={profilePic}
              alt="Ilya Boyandin"
              className={css({
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(4),
                height: rhythm(4),
                borderRadius: '50%',
              })}
            />
          </Link>

          <Title>
            Ilya Boyandin
            <h2 className="subtitle">Web and Data Visualization Software Engineer</h2>
          </Title>

          <Contact>
            <Go to="https://twitter.com/ilyabo">@ilyabo</Go>
            <Go to="https://github.com/ilyabo">ilyabo@github</Go>
            <Link to="/">ilya.boyandin.me</Link>
            ilya@boyandin.me
          </Contact>
        </Header>




        <br/>
        <div className="content">

          <h2>Education</h2>

          <div className="block">
            <span className="em">MSc Computer Science, St. Petersburg State University, Russia, 2003</span><br/>
            <span className="flabel">Thesis title:</span> Statistical Query Transformations for Question Answering in the Web<br/>

            <span className="flabel">Summary:</span>
            Developed an improvement for a state-of-the-art machine learning approach transforming
            natural language questions into search engine queries achieving a better
            quality of <Go to="http://en.wikipedia.org/wiki/Question_answering">question answering</Go>.
          </div>

          <div className="block">
            <span className="em">PhD in Computer Science, University of Fribourg, Switzerland, 2013</span><br/>
            <span className="flabel">Thesis title:</span> Visualization of Temporal Origin-Destination Data<br/>

            <span className="flabel">Summary:</span>
            Carried out an <Go to="/assets/thesis.pdf">in-depth study</Go> of temporal origin-destination data
            which can represent movement of people, energy, material, etc between locations in geographic space.
            Developed <Go to="/p/flowstrates/">Flowstrates</Go>,
            a novel approach for visualizing and exploring temporal origin-destination data.
            Carried out a qualitative <Go to="/p/flowmap-user-study/">user study</Go> comparing animated and small-multiple
            representations of changes in flow maps.

          </div>


          <h2>Experience</h2>


          <div className="block">



            <div className="jobTitle">
            <span className="em">Staff Software Engineer, Front End and Data Visualization, Teralytics,
          Zurich, Switzerland</span>
              &nbsp;&ndash;&nbsp;
              <span className="wtime">since February 2015</span>
            </div>
            <ul>
              <li>Designed and developed <Go to="/p/tera-transport/">exploratory data</Go> <Go to="/p/street-flow-zh/">visualization tools</Go> for the analysis of people mobility
                in various cities/countries around the world.</li>
              <li>Designed and developed <Go to="/p/sg-trains/">interactive dashboards and data visualizations</Go> for real-time transportation
                network monitoring, incident analysis, transportation planning in Singapore.</li>
              <li>Devised a system architecture for <Go to="/talks/2018-12-20-gflowiz/">scalable OD-data visualization</Go> to
                support interactive data analysis across billions of rows.</li>
              <li>Technical and strategic leadership in a team of several developers.</li>
              <li>Published <Go to="/p/flowmap.gl/">Flowmap.gl</Go>,
                an open-source library for drawing flow lines representing movement on geographic maps in WebGL.</li>
              <li>Developed <Go to="/p/flowmap.blue/">Flowmap.blue</Go>,
                an open-source tool for geographic flow map visualization from spreadsheets
                published in Google Sheets.</li>

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
                a series of <Go to="/p/swiss-maps/">geograpic visualizations about Switzerland</Go>,{' '}
                <Go to="/p/ww1/">Interactive timeline of WWI</Go>,{' '}
                pieces on unemployment and <Go to="http://maps.nzzdali.ch/nzzdata/sommerserie-2014/medical-care/">medical care</Go>.
              </li>
              <li>Developed an interactive visualization of the  <Go to="/p/african-trade/">trade of the world's countries with Africa.</Go></li>
              <li>Developed a <Go to="/p/comp-browser/">visualization of research expertise</Go> for Zurich University of Applied Sciences. </li>
              <li>Developed <Go to="/p/gemeinwohl/">Public Value Atlas</Go> with the University of St. Gallen</li>
              <li>Developed an <Go to="/p/snf/">exploratory data analysis tool</Go> for Swiss National Science Foundation related to research proposals and activities.</li>
            </ul>


            <br/>


            <div className="jobTitle"><span className="em">PhD Student, Assistant,
    	University of Fribourg, Switzerland</span>
              &nbsp;&ndash;&nbsp;
              <span className="wtime">April 2009 - May 2013</span></div>
            <ul>
              <li> Developed <Go to="/p/jflowmap/">JFlowMap</Go>, an experimental tool for the visualization of spatial interactions.</li>
              <li>Developed web-based <Go to="/p/aiddata/">visualizations of AidData</Go>
                {' '}(financial aid given to developing countries).</li>
              <li>Contributed to the <Go to="/p/birdeye/">BirdEye</Go> visualization library developed at the UN Centre for Advanced Visual Analytics.
                {/*<!-- Making the animated graph layouts from the previous library version work within the new framework based on the*/}
                {/*<Go to="http://www.springer.com/statistics/computanional+statistics/book/978-0-387-24544-7">Grammar of Graphics</Go>.-->*/}
              </li>
              <li>Assisted in courses on Web technologies and Functional programming. Tutoring, giving occasional lectures, preparing materials, building supporting websites and utilities.</li>
              {/*<!--<li>Developing a webapp with  (randomly generated) exercises for the students on XML, XSLT, and SVG and with the ability to run a competition and see the*/}
              {/*students' ranking updating in real-time.</li>-->*/}
              <li>Tutoring in workshops on programming and computer graphics for students and school children.</li>
            </ul>

            <br/>


            <div className="jobTitle"><span className="em">Senior Software Engineer, Technical Team Lead, IT Department, University of Applied Sciences FH Joanneum, Graz, Austria</span>
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
                to provide a statistical overview of
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
              <li>Designed and developed <Go to="/p/cgvis/">CGVis</Go>, a visualization tool facilitating hierarchical clustering, zooming and animation for the exploration of multidimensional datasets.
                {
                  //               <!--The tool
                  // facilitates hierarchical clustering, zooming and animation to help the users to explore their datasets.-->
                  //               <!--The tool is now freely available under GPL at
                  //                 <Go to="http://code.google.com/p/cgvis">http://code.google.com/p/cgvis</Go>.-->
                }
              </li>

              <li>Designed and developed a standalone and a web version of a <Go to="/p/proclassify/">proteomic data classification tool</Go> implementing a cancer diagnosis method based on mass-spectrometry data facilitating multi-step feature reduction and SVM classification.
                {
                  //                     <!--which implements a data reduction algorithm developed at the Institute for Genomics and Bioinformatics (TU Graz) and uses SVM for
                  // the subsequent sample classification. -->
                }
                The tool achieves 99% classification accuracy on the NCI Cancer SELDI-TOF study dataset.

                {
                  //                 <!--Both the standalone and the web versions are
                  // available at the <Go to="http://genome.tugraz.at/proclassify/proclassify_description.shtml">
                  // IGB website.</Go>-->
                }

              </li>

              <li>Participated in the development of a <Go to="/p/fhlite">presentation management tool</Go> for the information screens installed at the university.
                Developed the visual layout editor for arranging multimedia
                objects on the screen and the schedule editor similar to calendar in Outlook.

              </li>

              <li>Improved the implementation of an algorithm detecting the behavior type  of a user looking at a web page
                {' '}based on the real-time eye-tracking data.
                {
                  // <!-- (skimming, reading, searching, or learning)-->
                  // <!--Implemented a visualization of the web page reading process.-->
                }
                {/*<!--<li>Migrated the <Go to="http://adele.fh-joanneum.at/">AdeLE project website</Go>*/}
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
                Worked in the Sun's <Go to="https://en.wikipedia.org/wiki/Swing_(Java)">Java Swing UI library</Go> maintenance team. Was responsible for fixing bugs
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
            <span className="em">Languages: </span> JavaScript/TypeScript, Clojure, Python, Java, Scala, C<br/>
            <span className="em">Web:</span> React, Node.js, GraphQL, SVG, Canvas, WebGL<br/>
            <span className="em">Visualization:</span> D3, Deck.gl, Vega, Tableau<br/>
            <span className="em">GIS:</span> Mapbox, PostGIS, QGIS<br/>
            <span className="em">Databases:</span> PostgreSQL, MySQL, BigQuery, ClickHouse, SQL Server, Redis<br/>
            <span className="em">UI Design:</span> Sketch, Figma, Photoshop<br/>
            {/*<span className="em">Cloud:</span> Heroku, Digital Ocean, Netlify, AWS, Google Cloud, Marathon, Kubernetes<br/>*/}
          </div>



          <h2 id="talks">Public Speaking</h2>
          <div className="block notitles">
            <ul>
              <li><span className="pubTitle"><Link to="/talks/2020-07-30-uc.foundation/">Presenting Flowmap.blue</Link></span> at the <Go to="https://uc.foundation/">Urban Computing Foundation</Go> Technical Advisory Council meeting, 2020</li>
              <li><span className="pubTitle"><Link to="/talks/2020-07-07-agit/">Flowmap.blue</Link></span> (in German) at the <Go to="https://agit.at/">AGIT symposium</Go>, 2020</li>
              <li><span className="pubTitle"><Link to="/talks/2020-05-13-datavis-meetup/">Flow Maps</Link></span> at the <Go to="https://www.meetup.com/datavis-zurich/events/270384574/">Data Visualization Zurich Meetup</Go>, online, 2020</li>
              <li><span className="pubTitle"><Link to="/talks/2020-01-22-datacouncil-meetup">Interactive Queries over Billions of Trips: Using ClickHouse for Mobility Data</Link></span> at the <Go to="https://www.meetup.com/en-AU/DataCouncil-AI-Zurich-Data-Engineering-Science/events/267081855/">DataCouncil Meetup</Go>, Zurich, 2020</li>
              <li><span className="pubTitle"><Link to="/talks/2019-11-17-on-data-and-design/">Visualizing Mobility</Link></span> at the <Go to="https://datafest.ge">DataFest</Go>, Tbilisi, 2019</li>
              <li><span className="pubTitle">Meet-up talk on <Link to="/talks/2019-11-05-on-data-and-design/">Visualizing Mobility</Link></span> at <Go to="https://www.meetup.com/de-DE/ondataanddesign-Switzerland/events/265947767/">On data and design</Go>, YAAY Studio, Basel, 2019</li>
              <li><span className="pubTitle"><Link to="/talks/2019-10-11-urban-mobility-symp/">Scalability of OD-data visualizations</Link></span> at the <Go to="https://www.citylab-berlin.org/events/mobilitysymposium_en/">Urban Mobility Symposium</Go>, CityLAB Berlin, 2019</li>
              <li><span className="pubTitle"><Link to="/talks/2019-04-03-unibern/">Flowmap.blue: Ein Tool zur Erstellung von Flow Maps</Link></span>  (in German) at the <Go to="http://www.digitale-nachhaltigkeit.unibe.ch/studium/data_visualization_group/index_ger.html">Data Visualization Group meeting</Go>, University of Bern, 2019</li>
              <li><span className="pubTitle"><Link to="/talks/2019-03-22-ups/">Visualization of OD data</Link></span> at the UPS Advanced Technology Group workshop, online, 2019</li>
              <li><span className="pubTitle"><Link to="/talks/2019-03-03-clisel/">Flowmap.blue: Geographic flows visualisation tool for the people</Link></span> at the workshop <Go to="http://www.clisel.eu/Ascona">Environmental Changes and Human Mobility</Go> in Ascona, 2019</li>
              <li><span className="pubTitle"><Link to="/talks/2018-12-20-gflowiz/">Scalable Origin-Destination Data Visualization</Link></span> at <Go to="https://gflowizworkshop.sciencesconf.org">GFlowiz Workshop</Go> in Paris, 2018</li>
              <li><span className="pubTitle"><Link to="/talks/2018-07-11-react-meetup/">Graphics with React</Link></span> at <Go to="https://www.meetup.com/Zurich-ReactJS-Meetup/events/251517816/">React.js Meetup</Go> in Zurich, 2018</li>
              <li><span className="pubTitle"><Go to="https://docs.google.com/presentation/d/e/2PACX-1vRNRaJFAwe13zoWrr7DPnJG4ujbvIccAmrfW-WCL4CGNU_GfYmRJlzbfJ7APOPl_9va1YzS0RNTrXjN/pub?start=false&loop=false&delayms=3000">Data Visualization Engineer: ist das ein Beruf?</Go></span>  (in German) guest lecture, Mannheim University of Applied Sciences, 2017</li>
              <li><span className="pubTitle"><Link to="/talks/2015-11-27-react-meetup/">Visualizing People Movement with React</Link></span> at <Go to="http://www.meetup.com/Zurich-ReactJS-Meetup/events/226391438/">React.js Meetup</Go> in Zurich, 2015</li>
              <li><span className="pubTitle"><Link to="/talks/2015-04-03-openvis/">Interactive Data Visualization with React: Taming the Complexity of the Changing State</Link></span> at <Go to="http://openvisconf.com/">OpenVis Conf</Go> in Boston, 2015</li>
              <li><span className="pubTitle">Data Visualization for Media: Processes and Tools</span> at <Go to="https://tech.ebu.ch/devcon14">EBU DevCon</Go>  in Geneva, 2014</li>
              <li><span className="pubTitle">Making Sense of Data with Visualization</span> at SICHH Forum Data Visualization & Big Data, 2014</li>
              <li>Presented research work at the scientific data visualization conferences EuroVis and VisWeek</li>
            </ul>
          </div>

          <h2>Workshops</h2>
          <div className="block notitles">
            <ul>
              <li><span className="pubTitle">Hands-on Visualization of Geographic Movement:
                How to make an interactive flow map</span> at <Go to="https://datafest.ge">DataFest</Go>, Tbilisi, 2019</li>
              <li><span className="pubTitle">Robotics/Programming for kids with LEGO boost robot</span> at Freie Schule Bergmeilen, 2018</li>
              <li><span className="pubTitle">UI development with Reagent in ClojureScript</span> at Clojure Meetup in Zurich, 2014</li>
              <li><span className="pubTitle">Women in science: Drawing with computer for schoolgirls</span> at University of Fribourg, 2011 and 2012</li>
              <li><span className="pubTitle">Programming and computer graphics for kids</span> at Kantonsschule Solothurn, 2012 and Gymnasium Brig, 2011</li>
            </ul>
          </div>

          <h2>Publications</h2>
          <div className="block">
            <span className="pubTitle"><Go to="https://medium.com/teralytics/visualizing-mobility-data-the-scalability-challenge-2575fe819702">Visualizing mobility data: the scalability challenge</Go></span>,
            Ilya Boyandin. Medium, Dec 2019.
            <br/><br/>

            <span className="pubTitle"><Go to={flowstratesPdf}>Flowstrates: An Approach for Visual Exploration of Temporal Origin-Destination Data</Go></span>,
            Ilya Boyandin, Enrico Bertini, Peter Bak, Denis Lalanne.
            Computer Graphics Forum, International Journal of the Eurographics Association,
            Eurographics/IEEE-VGTC Symposium on Visualization, Bergen, Norway, June 2011.
            <br/><br/>

            <span className="pubTitle"><Go to="/assets/jflowmap-user-study.pdf">A Qualitative Study on the Exploration of Temporal Changes in Flow Maps with Animation and Small-Multiples</Go></span>,
            Ilya Boyandin, Enrico Bertini, Denis Lalanne.
            Computer Graphics Forum, International Journal of the Eurographics Association,
            Eurographics/IEEE-VGTC Symposium on Visualization, Vienna, Austria, June 2012.
            <br/><br/>

            {            // <!--<span className="pubTitle"><Go to="http://ilya.boyandin.me/papers/jflowmap-eurovis10-poster.pdf">Visualizing the World’s Refugee Data with JFlowMap</Go></span>,
              // Ilya Boyandin, Enrico Bertini, Denis Lalanne.<br/>
              // Poster Abstract at Eurographics/IEEE-VGTC Symposium on Visualization, Bordeaux, France, June 2010.
              // <br/><br/>
              // -->
            }
            <span className="pubTitle"><Go to={jflowmapPdf}>Using Flow Maps to Explore Migrations Over Time</Go></span>,
            Ilya Boyandin, Enrico Bertini, Denis Lalanne.
            Workshop in Geospatial Visual Analytics: Focus on Time, GeoVA(t), Guimarães, Portugal, May 2010.
            <br/><br/>

            <span className="pubTitle"><Go to="http://rcdl.ru/doc/2003/B3.pdf">Statistical Query Transformations for Question Answering in the Web</Go></span> (in Russian),
            Ilya Boyandin, Igor Nekrestyanov.
            Fifth Russian Conference on Digital Libraries (RCDL'2003),
            St. Petersburg, Russia, October 2003.
            <br/><br/>

            <span className="pubTitle"><Go to="/assets/thesis.pdf">Visualization of Temporal Origin-Destination Data</Go></span>,
            PhD thesis, University of Fribourg, March 2013.

          </div>

          <h2>Awards</h2>
          <div className="block notitles">
            <ul>
              <li>Bronze award in the  “Visualization & Information Design” category of
                the <Go to="https://www.informationisbeautifulawards.com/showcase/3815-flowmap-blue">Information
                  is Beautiful Awards</Go> for <Go to="https://flowmap.blue">flowmap.blue</Go> in 2019.
              </li>
              <li>
                Shortlisted in the  “Interactive Visualization” category of
                the <Go to="https://iibawards.herokuapp.com/showcase/552-public-value-atlas">Information
                  is Beautiful Awards</Go> for <Go to="/p/gemeinwohl">Gemeinwohl</Go> in 2014.
              </li>
              <li>
                First prize in the  “Interactive Graphics” category of
                the <Go to="https://www.wan-ifra.org/de/articles/2013/10/24/preistraeger-des-dpa-infografik-awards-2013-ausgezeichnet">dpa-infografik
                award</Go>  for the <Go to="/p/swiss-maps">Swiss maps series</Go> in 2013.
              </li>
            </ul>
          </div>

          <h2>Other Activities</h2>
          <div className="block notitles">
            <ul>
              <li>Developed an interactive
                {' '}<Go to="/p/remittances/">visualization of the worldwide remittance flows</Go>
                {' '}published by the newspapers <Go to="http://www.tageswoche.ch/de/2013_19/schweiz/540004/milliarden-aus-der-fremde.htm">TagesWoche.ch</Go> and <Go to="http://derstandard.at/1363710784566/Wieviel-Geld-Migranten-zurueck-in-ihre-Heimat-schicken">derStandard.at</Go>.
              </li>
              <li>Developed a <Go to="/p/swiss-trains/">visualization of SBB train flows</Go> in a team of several developers at the Make Opendata Camp in Zurich.</li>
              <li>
                {
                  // <!--Participated in the organization of the Russian Information Retrieval Evaluation Sembit.ly/sichhinar (ROMIP) and-->
                }
                Maintained the <Go to="http://www.romip.ru/en/index.html">website</Go> of the Russian Information Retrieval Evaluation Seminar with the use of a self-made Java XSLT-engine.
                {/*<!-- <Go to="http://www.romip.ru/en/index.html">the website of the seminar</Go> which is still in active use.-->*/}
              </li>
              <li>
                Developed <Go to="http://pof.sourceforge.net">phpObjectForms</Go>, an open-source
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
              <li>English (full professional proficiency)</li>
              <li>German (full professional proficiency)</li>
              <li>French (intermediate)</li>
              <li>Russian (mother tongue)</li>
            </ul>
          </div>

          <h2>Hobbies</h2>
          <div className="block">
            <Go to="http://soundcloud.com/ibananti">Electronic music production</Go>,{' '}
            <Go to="http://www.flickr.com/photos/ibananti/sets/">photography</Go>,
            hiking, traveling.
          </div>


        </div>

      </CV>
    </Layout>
  )
}

export default Resume

