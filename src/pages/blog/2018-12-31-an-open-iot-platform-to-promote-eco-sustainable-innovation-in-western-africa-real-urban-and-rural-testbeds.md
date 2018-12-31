---
templateKey: blog-post
title: >-
  An Open IoT Platform to Promote Eco-Sustainable Innovation in Western Africa:
  Real Urban and Rural Testbeds
date: 2018-12-31T15:18:04.383Z
description: 'https://www.hindawi.com/journals/wcmc/2018/1028578/abs/'
tags:
  - '#mindfulness #Iot #farming #programming'
---
Abstract

The digital revolution led by the Internet of Things (IoT) is already reshaping several traditional business sectors. Moreover, because of its very nature, the promise of the IoT is also to reduce energy consumption and pollutant emissions in several environmental scenarios. At the same time, it is desirable to keep the development of IoT as sustainable as possible, hence truly realizing the vision of the green IoT. In this paper, we show how a full-stack IoT framework can alleviate some real environmental problems afflicting countries in Western Africa. We present three real IoT-based deployments currently hosted in two rural areas of Senegal and Ghana and one metropolitan area of Togo. These testbeds are connected to a Cloud-based software platform, purposely designed and engineered to address some very specific environmental, economic, and social requirements of the region.



1. Introduction

Since its coinage by K. Ashton in 1999 \[1], the term “Internet of Things” (IoT) has attracted a multitude of research and industrial interests. Today, the IoT paradigm embraces numerous architectures, protocols, standards, services, and applications for ubiquitous data acquisition and large-scale data analysis. A wide range of domains is impacted: housing, precision agriculture, retail, transportation, infrastructure monitoring, and personal healthcare, just to mention a few \[2]. In all these domains, autonomous devices (i.e., “the things”) are able to collect data and push them to the Internet. Authoritative sources like Gartner expect that, by 2020, around 26 billion objects will be connected to the Internet (https://www.gartner.com/newsroom/id/2636073) while, according to IDC (https://www.forbes.com/sites/louiscolumbus/2017/12/10/2017-roundup-of-internet-of-things-forecasts/#5a432b8c1480), worldwide spending on IoT is forecasted to reach 772.5 billion USD in 2018, hence with an increase of 14.6% over the 674 billion USD predicted for 2017. These numbers reveal that the IoT digital revolution is already happening: a huge amount of connected objects will be deployed everywhere within a few years, making the world we are living in ultraconnected, hence also smarter.



However, for such a smarter world to be sustainable, its enabling technologies should be characterized by a certain degree of energy efficiency \[3]. In other words, these billions of things equipped with sensing, processing, and wireless communication capabilities will require energy to operate, usually provided by on-board batteries \[4]. For this reason, energy efficiency will be one of the key elements for the implementation and development of the so-called green IoT concept \[5].



In recent years, Western Africa registered a very rapid economic development but, unfortunately, this fast development made environmental problems grow proportionally, in a region where dramatic climate changes and natural disasters already represent huge threats in both rural and metropolitan areas. However, the adoption of the IoT in this region has the potential of being disruptive in several sectors \[6, 7]. To better understand this implication, consider what happened in Africa with the telecommunications services: currently, 93% of the African population has access to mobile phones, while landlines phones were never massively deployed in the continent! Thus, the African continent has the potential of directly jumping into the open IoT arena, completely skipping any siloed business or industry. Then, it is not coincidence that Sonatel (a subsidiary company of Orange telecommunications provider in Africa) has inaugurated a FIWARE (https://www.fiware.org/) hub in Dakar, Senegal, while multinational corporations such as IBM (https://www.ibm.com/blogs/research/2016/10/forecasting-air-quality-south-africa-iot/), SAP (https://news.sap.com/africa/2016/12/19/iot-connecting-africa/) and Google (http://allafrica.com/stories/201705170571.html) have already established foot on the continent. Furthermore, in Africa, the rising phenomenon of the so-called “tech hubs” is taking a big role in the global and capillary diffusion of IT technologies in general (of IoT, in particular). As we write, for instance, the AfriLabs (http://www.afrilabs.com/) initiative already comprises more than 80 of such innovation centers across 27 African countries.



Generally speaking, as summarized in Figure 1, for a solution to be successful, it should not only be economically viable but also environmentally friendly and socially integrated \[8]. In this specific case, socially valid approaches are inherently tied together to a solid growth of the African SME sector \[9]. Consider, for instance, that, according to the African Economic Outlook 2017 (a report jointly produced by the African Development Bank Group, the Organization for Economic Cooperation and Development, and the United Nations Development Programme), about 80% of Africans consider entrepreneurship as a good career opportunity, revealing the very lively entrepreneurial culture of this continent \[10].





Figure 1: The Venn diagram of sustainable development.

In this paper, we propose a full-stack IoT framework which is able to alleviate some of the unique environmental challenges afflicting Western Africa’s countries, while being also socially accessible and economically effective. With the goal of keeping down the costs of the sensing and actuating infrastructure, we adopted a Do-It-Yourself (DIY) approach, integrating only low-power and low-cost off-the-shelf components. This strategy, in fact, allows local partners and end-users to easily reproduce the solution in a sustainable and cost-effective way. Nevertheless, the engineered devices result to be very environmentally friendly, being able to run for at least two years with a couple of standard AA batteries. At software side, the Cloud-based infrastructure offers very peculiar services able to meet some of the unique requirements of this region. Examples of requirements are notifications via SMS and voice messages, resiliency against the low technical expertise of the average end-user, and robustness against frequent Internet disconnections. We deployed and tested our framework in three real testbeds. The first use case tackles water and soil management with a local variety of tomato crops. It is deployed in an experimental farm at Gaston Berger University, Saint-Louis, Senegal. The second use case, deployed in Ghana, shows that low-cost IoT devices can help improve water quality in fish farms. Finally, the third use case shows how IoT devices can be used to effectively perform waste management in African urban scenarios. It is deployed in Lomé, the capital and largest city of Togo.



The remainder of this paper is organized as follows: Section 2 reviews the most recent related works, while Section 3 describes the current major challenges to be faced by the IoT in Western African countries. Then, Section 4 thoroughly describes the proposed platform, while the three real testbeds deployed in Senegal, Ghana, and Togo are thoroughly described in Section 5. Section 6 concludes this paper.



2. Related Works

2.1. From Green IT to Green IoT

According to the IoT paradigm, each day more devices are connected to the Internet. It follows that, in the near future, everything around us will be ultraconnected. The huge amounts of digital information produced need to be transferred from/to the devices through the Internet itself, hence generating high volumes of data traffic. Moreover, such exponential growth in data production requires the application of very advanced digital technologies able to quickly filter, process, and store the data flowing from devices to data centers (e.g., big data, big stream, and data analytics \[11]). Thus, both data and communications systems need to implement and adopt some power management policy to reduce their CO2 emissions and become truly environmentally sustainable. This is the challenge that the green IT branch sets itself. More in detail, in \[12] we find a formal definition of “green IT” as a holistic approach able to benefit the environment, by improving energy efficiency, lowering greenhouse gas emissions, using less harmful materials, and encouraging reuse and recycling. In other words, the “greening” process may be realized either by acting at the IT system itself or in the way that such IT system is used. For instance, the authors of \[13] analyze some power management policies for both processing and communications subsystems (i.e., holistically), with the goal of wisely trading-off power consumption and quality of service (QoS) delivered to the users.



With reference to data subsystem (and so to the Cloud side of our framework), different strategies to reduce power consumption are currently investigated in the literature. For instance, the authors of \[14], after noticing that standard approaches to resource overprovisioning are excessively power hungry, proposed some novel, dynamic virtual machine consolidation techniques. Those techniques are able to reduce energy consumption without compromising any service level agreement, hence without undermining QoS. For a comprehensive review of techniques and approaches recently proposed in the literature to reduce power consumption in Cloud-based environments along the whole technology stack (i.e., from the service request issued by users to the actual Cloud service provider), we invite the interested reader to refer to \[15].



With reference to green communications, there are several technological challenges still open \[16]. The concept of energy efficiency is gaining back popularity, although mostly to alleviate economic concerns rather than ecological ones. Indeed, the consumption of energy by telecom operators, together with the cost of energy, is showing continuously growing trends \[17]. A wide portion of the research community is currently putting efforts in defining and implementing the fifth generation (5G) wireless cellular network technology, so as to support the drastic demands of user subscriptions and data bandwidths. Clearly, also in this case energy consumption represents a concern, as users’ terminals are still powered by batteries. For a detailed review of the major challenges in 5G green communications, the reader is referred to \[18]. However, the assumption here is that batteries may be recharged when needed, while this is not the case for the vast majority of the billions IoT devices expected to spread out in the near future. In this context, a standard requirement for an IoT application is to run without manual intervention (i.e., autonomously) for years. It follows that the only way forward to engineer this kind of applications is to be as power-aware as possible. For this reason, the IoT is considered as an umbrella of technologies that should be green by design.



2.2. Green IoT in Western Countries

In the literature (\[5, 19]) “Green IoT” is defined as “the energy-efficient procedures (hardware or software) adopted by IoT either to facilitate reducing the greenhouse effect of existing applications and services or to reduce the impact of the greenhouse effect of IoT itself. In the earlier case, the use of IoT will help reduce the greenhouse effect, whereas in the latter case further optimization of IoT greenhouse footprint will be taken care. The entire life cycle of green IoT should focus on green design, green production, green utilization, and finally green disposal/recycling to have no or very small impact on the environment”. A recent, extensive report from Cisco Systems Inc. provides several precious insights into the envisioned role played by some of the most modern IoT technologies. This report also highlights a number of scenarios where the IoT is practically solving (or, at least, alleviating) some of the world’s most challenging development and sustainability issues \[7].



According to the Food and Agriculture Organization of the United Nations (FAO), the current world population of 7.6 billion is expected to reach 9.8 billion in 2050 and nearly all of this population increase will occur in developing countries \[20]. In order to feed this larger population, food production must increase at least by 70%. Looking at these numbers, it is clear that improvin the farm productivity is an essential factor in the survival of the human race. Within this challenge, the green IoT is envisioned to play a leading role, being it one of the major technologies of the so-called smart farming sector, sometimes also referred to as precision agriculture. The authors of \[21] define precision agriculture as “a suite of IT-based tools which allow farmers to electronically monitor soil and crop conditions and analyze treatment options”, also highlighting the importance of compatibility between enabling technology and farmers’ expertise. Recently, the authors of \[22] described the design of an IoT-based platform, SmartFarmNet, as being able to collect environmental data coming from fields and store such data in the Cloud for performance analysis and recommendations. Similarly, \[23] employed the OpenIoT middleware infrastructure (http://www.openiot.eu) to integrate a Phenonet deployment in Australia (https://data61.csiro.au/en/Our-Work/Monitoring-the-Environment/Sensing-the-environment/Phenonet). Specifically, the latter employs a state-of-the-art sensor network technology to gather environmental data for crop variety trials at a higher resolution than conventional methods. Then, thanks also to the features enabled by the OpenIoT platform, scientists and farmers are able to visualize, process, and extract both real-time and long-term crop performance information from the acquired sensor measurements. Smart farming applications include also farm vehicle tracking, livestock monitoring, greenhouse monitoring and control, and storage monitoring, only to mention few examples. Livestock sensors on-board IoT devices can, for instance, electronically monitor the animals’ vital signs \[24] or notify ranchers when animals have roamed from the herd. Soil sensors can alert farmers to irregular conditions, giving the farmer time to reconcile the issue and produce better crops. This is the case, for instance, for \[25], where the authors perform temperature control in a greenhouse using Zigbee-based wireless communications.



Some recent approaches have also introduced another architectural component, namely, the IoT gateway. IoT gateways are used by the authors of \[6, 26], where they present a system architecture for remote agriculture process automation. The peculiarity of these works is that the sensors and actuators are wirelessly connected to an IoT gateway, which is able to perform the monitoring and controlling process.



Getting back to the FAO’s most recent forecasts, around 66% of the world’s population is expected to live in urban areas by 2050. It is obvious that cities will need to increase the efficiency in which they operate and use their resources, in order to meet the demands imposed by such a dramatic urbanization. In this context, the main challenge is to keep providing basic resources, such as sufficient fresh water, clean energy, public transportation, safety, and security. These resources should be provided while also ensuring economic, social, and environmental sustainability \[27]. In other words, the constant improvement and enhancement of the citizens’ quality of life will continue to be the main goal of every modern city of the future. In this challenging arena, green IoT is expected to play a crucial role. However, collecting, analyzing, and exploiting large amounts of data generated by many heterogeneous sources spread throughout the city represent very challenging issues \[28].



2.3. Green IoT in Africa

The penetration level of IoT in Africa is much lower than in other world regions, as also highlighted in \[29, 30]. To quantify this gap, it is sufficient to look at the fixed broadband Internet subscription rates (https://www.statista.com/statistics/370681/fixed-broadband-internet-penetration-region/) of 2017: 1 person every 100 inhabitants in Africa, against 37.2 in Europe. Although this gap is reduced when dealing with the mobile broadband Internet subscription rates (https://www.statista.com/statistics/370694/mobile-broadband-internet-penetration-region/) (26 and 85.2 in Africa and Europe, respectively), it is clear that the Internet availability in this continent is still far behind the world’s average figure. Because of this Africa’s uniqueness, M. Masinde advocates for innovative African-centric approaches to IoT, rejecting the old-style approach of “transferring of Northern designs to Southern realities” \[30, 31]. More in detail, by considering two very concrete use cases as a drought early warning system and an asset tracking system, he argues that, by innovatively exploiting local and unique realities such as indigenous knowledge, the chances of success for an IoT-based business in this continent are increased. The authors of \[29] provide a comprehensive survey, country by country, of the undertaking of IoT in Africa, also isolating the major challenges that still hinder the wide adoption of the IoT in the continent.



With reference to the benefits of the IoT technologies for a sustainable development of rural African environments, the authors of \[32] introduce some interesting applications in the agriculture domain (i.e., crop farming, weather forecasting, wildlife management, forestry, livestock farming, market identification, and rural financing), focusing on some very specific requirements of rural areas of South Africa and Zambia. This work is similar to our use cases in Senegal and Ghana; see Sections 5.1 and 5.2, respectively. A very inspiring work is described in \[33], where the authors suggested the development and the implementation of the so-called “frugal IoT”, as a paradigm to improve the monitoring and management of small-scale farms in Africa. In this case, the final goal is to minimize IoT-related hardware deployment, while maximizing the benefits of the adoption of such hardware, so as to bring African small farmers closer to the market and improve the prospects for food security across the continent. A more practical deployment of a standalone Wireless Sensor Network (WSN) for precision irrigation in Malawi is presented in \[34]. More in detail, this deployment consists of a ZigBee-based WSN whose base station is connected to the Internet through a GPRS modem. Sensor nodes are powered by rechargeable batteries through solar panels, while they are provided with on-board sensors able to measure soil temperature and soil moisture, as well as irrigation valves able to automate the field watering process.



Finally, with reference to the benefits of the IoT technologies for a sustainable development of African metropoles, the authors of \[35] identify several potential applications of IoT in transport that can make a difference to the South African economy. Our urban use case in Togo, see Section 5.3, also tackles urban development. In \[36], the authors propose a smart end-to-end IoT architecture able to monitor and control electric water heaters which are responsible for consuming over 30% of household energy budget in South Africa. In \[37], the authors apply smart city and smart mobility indicators to determine the level of smartness of the public transport infrastructure in South Africa and Gauteng province. Finally, authors of \[38] discuss the current situation of public transportation in the city of Ouagadougou, Burkina Faso. Interestingly, they also provide and evaluate a preliminary distributed application based on users’ personal phones, RFID tags mounted on buses and Short Message Service (SMS) of mobile cellular networks for communication, hence addressing the technological and social specificity of the sub-Saharan region.



3. IoT in Africa: Challenges

Any IoT deployment should tackle and solve a common set of technical challenges, such as end-to-end security, data privacy and trust, scalability, and interoperability \[2]. However, African scenarios reveal a pool of unique challenges. Especially in remote and rural areas, the main challenges are the high cost of hardware, the complexity of deployment, and the lack of technological ecosystem and background \[39].



Despite these difficulties, there are many opportunities for IoT in Africa. The following are but some of the most striking examples: monitoring of water, air, and soil quality, potable water management and optimization, warning systems for environmental threats (e.g., drought, tsunami, flood, earthquake, wildfire), wild animal tracking devices, and deforestation control systems \[30, 40].



In this section, we detail seven challenges with IoT deployments in Africa, namely, (i) longer range for rural access, (ii) cost of hardware and services, (iii) dependency to proprietary infrastructures, (iv) local interaction models, (v) low-energy consumption, (vi) ease of deployment and operation, and (vii) resilience against environmental hazards.



3.1. Longer Range for Rural Access

Traditional mobile communication infrastructures (e.g., GSM/GPRS and 3G/4G) are still very expensive to use with IoT devices. Moreover, they are definitely not energy-efficient for autonomous devices that must run on battery for months. Short-range technologies such as IEEE 802.15.4 can eventually be used by implementing multi-hop routing to overcome the limited transmission range but this can only be envisaged with high node density and easy access to power scenarios such as smart-cities environments. They can hardly be considered in isolated or rural environments.



Recent Low-Power Wide Area Networks (LPWAN), Sigfox™ or Semtech’s LoRa™ technology, provide a much more adapted connectivity answer for IoT in remote areas as a star topology with a central gateway or base station can be deployed \[41]. Most of the long-range technologies can achieve 20km or higher range in LOS condition and about 2km in urban NLOS \[42]. LoRa technology that can be privately deployed in a given area without any operator has a clear advantage in the context of developing countries over Sigfox whose coverage is entirely operator-managed.



3.2. Cost of Hardware and Services

Commercial IoT devices are definitely too expensive for very low-income countries. In addition, these highly integrated devices are difficult to repair, and their parts are hard to find locally. The availability of low-cost, open-source hardware platforms such as Arduino definitely pushes for a Do-It-Yourself (DIY) and “off-the-shelves” design approach: the Arduino Pro Mini based on an ATmega328 microcontroller has a high performance/price tradeoff and can be used to build a low-cost generic sensing IoT platform with LoRa long-range transmission capability for less than 10 euro. In addition, these boards also benefit from the support of a worldwide and active community of developers and a large variety of software libraries are available.



Commercial LPWAN gateways use advanced concentrator radio chips to listen on several channels and radio parameters simultaneously. The cost of such concentrator alone is more than a hundred euro. In the context of smaller scale rural applications, simpler “single-connection” gateways can be built using the same radio components than those for end-devices. Again, by adopting “off-the-shelves” embedded Linux platforms (e.g., a Raspberry Pi board) the cost of an LPWAN gateway can be maintained as low as 50 USD.



3.3. Dependency on Proprietary Infrastructures

Along with the worldwide IoT uptake, a large variety of IoT Clouds platforms offers an unprecedented level of diversity which contributes to limit dependency on proprietary infrastructures. Most of these dedicated IoT platforms have free account offers that, despite some limiting features, can largely satisfy the needs of most agriculture/micro and small farm/village business models. In order to take advantage of all these infrastructures, the design of an IoT versatile gateway should highly decouple the low-level gateway functionalities from the high-level data postprocessing features to maximize the customization of the data management part. Furthermore, by privileging high-level scripting languages such as Python, the customization process can be done in a few minutes, using standard REST API interfaces to IoT Clouds. Therefore, rather than focusing on large-scale deployment scenarios, easy integration of low-cost off-the-shelves components with simple, open programming libraries should be the main focus of IoT platforms in developing countries.



3.4. Local Interaction Models

With unstable and expensive accesses to the Internet, data received on the gateway should be locally stored. In addition, a versatile gateway is also an interesting feature where it should be possible to turn the gateway into an end computer by just attaching a keyboard and a display, using visualizing data locally. With standard wireless technologies such as WiFi or Bluetooth, it is also interesting to provide local interaction with the end-user’ smartphone/tablet to display captured data and notify users of important events without the need of Internet access. Figure 2 shows the two interaction models.





Figure 2: Deployment scenarios in developing countries.

In the first case, the access to the Internet is provided to the gateway through technologies such as 3G/4G or DSL+WiFi. The second case shows a fully autonomous gateway scenario, without the Internet access. Data coming from sensing devices are collected and stored locally on the gateway. The data can then be accessed locally using smartphones or tablets connected to the gateway through a local WiFi or Bluetooth connection.



3.5. Low-Energy Consumption

The deployed IoT device must be able to run for at least 1 year using regular, easy-to-find batteries. Regular AA batteries can be purchased worldwide, even in remote villages. Our experiments showed that an IoT application running on a barely simple sensor node composed by an Arduino Mini board equipped with temperature and humidity sensors and a LoRa communication transceiver can last at least two years with a couple of standard AA batteries. As detailed in in Section 4, several techniques can be used to reduce the energy consumption, such as lowering the sampling and communication period.



3.6. Ease of Deployment and Operation

The system must be able to work out-of-the-box, or with minimum configuration effort. Important configuration steps, such as system upgrades, must be made available from a user-friendly interface accessible, for instance, through a low-cost smartphone. Remote maintenance is also a crucial point. For example in our rural testbeds, technicians have to drive for several hours to reach the deployment sites. Furthermore, in the case of smart agriculture, the sensors need to be redeployed on regular basis. This means that the devices are removed from the field by farmers before the harvesting and replaced at the end of the harvesting. The device deployment is, for this reason, delegated to low-qualified people.



3.7. Resilience against Natural Environmental Hazards

Durability and maintenance aspects are clearly a challenge for the DIY IoT strategy. The boards used can be fragile, and the casing in which they will be deployed must be studied with care. For instance, in the case of the DIY buoy developed and engineered for the fish ponds trial, the temperature and humidity in the box were very high, due to the sun and the proximity of water. The internal sensor installed inside the box showed that the temperature was reaching 50 Celsius degrees every day, while the relative humidity measured was more than 90% during the day. This resulted in damage to the battery and the board. The LoRa transmissions also suffer from obstacles. In our agriculture trial, once the crop grew up, this shadowed the antennas, resulting in frequent transmission losses.



4. The Proposed Platform

In this section, we describe the solution stack that has been developed to meet the unique requirements of Africa’s use cases. It comprises a hardware platform, which is low-cost, low-energy, and long-range. It also includes a Cloud data and application platform, able to offer unique services specially tailored to fit Africa’s needs.



4.1. IoT Sensing and Actuating Devices

Considering that the proposed platform is mainly employed in rural environments of developing countries, we adopted a Do-It-Yourself (DIY) approach to the IoT device assembly, which inherits the Arduino philosophy of low-cost, simple to program, yet efficient, hardware platforms. Indeed, the Arduino-compatible ecosystem is extremely wide and heterogeneous, proposing several solutions, from very powerful boards (mainly used for development purposes) to the tiniest and power-aware boards (more suitable for permanent setups). For instance, we used the Arduino small form factor board named “Pro Mini” as our generic tiny sensing IoT device. Such board comes with the minimum of components to keep the cost down (e.g., no on-board USB or pin headers, while still powered by an ATmega328P microprocessor running at 8MHz). Its unique features are the price (it is available for less than 2 USD, if bought directly from China suppliers), the size (18x33mm, less than 2 grams), and the low power it needs to properly work (it is a low-voltage board working at 3.3V, which guarantees very low-power consumption, especially when in deep-sleep mode (when in this state, the board registers 5μA of current draw.)). Thus, with efficient power management policies (e.g., sampling and reporting with a period of 1 hour) such a device is able to run in autonomy for years, with a couple of standard AA batteries. At the same time, to address the requirements of more demanding IoT applications, we also used boards belonging to the Teensy family (e.g., LC, 3.1, and 3.2). Such family offers state-of-the-art microcontrollers with more memory and advanced power management features with respect to the previous board, yet at a reasonable cost (e.g., about 10 USD for the LC model; indeed LC stands for “Low Cost”).



Thus, depending on the sensing task, our generic IoT device is powered by one of such boards, also integrating software building blocks into ready-to-use templates for quick and easy customization (see Figure 3).





Figure 3: The proposed generic sensing and actuating IoT device, together with the main software building blocks.

After the engineering phase, a low-cost hardware production approach is carried forward through a simple and open-source PCB design, which is then checked out as a 1-click order. Figure 4 depicts the whole production process of a sensing device equipped with an on-board integrated LoRa chipset and antenna that, besides providing seamless integration at lower costs, is necessary, for instance, when producing the cattle rustling collar, for obvious reasons of robustness.





Figure 4: Production process of an IoT sensing device comprising also a LoRa chipset and an integrated antenna.

Finally, Figure 5 depicts some of the already produced sensing devices, currently deployed in various testbeds in Africa (e.g., cattle rustling in Senegal, fish farming in Ghana) and Asia (e.g., multi-level soil moisture monitoring station for precision agriculture in Pakistan) and connected to the proposed platform.





Figure 5: Several devices deployed in various testbeds and connected to the proposed platform.

4.2. Versatile Gateway

The engineered gateway is a single-channel LoRa device that acts as a gateway by forwarding LoRa packets to the network. Such device can also receive (and decrypt, if necessary) LoRaWAN packets on a dedicated channel. As shown Figure 6, the gateway architecture sharply decouples low-level transport functionalities from the high-level data postprocessing features, privileging high-level languages at Cloud side. The versatile gateway is based on a Raspberry Pi board (all models supported), allowing deploying a very affordable, yet highly efficient, gateway proposing many features that are lacking in commercial gateways. Several versions of the gateway can be assembled with the same software distribution, depending on the budget and the deployment requirements and constraints, as illustrated in Figure 7. For instance, on the right-hand side of Figure 7 we show a tiny version of our gateway, based on a Raspberry Pi Zero board, coupled with a Loranga board (Loranga is a board officially supported by the WAZIUP European project and launched its own crowdfunding campaign on the Kickstarter platform.). This gateway, being equipped with a 2G/3G modem and a LoRa radio transceiver, is particularly well-suited for deployments in remote areas.





Figure 6: Modular and versatile low-cost gateway instances.



Figure 7: Low-cost DIY versatile LoRa gateway.

The gateway is able to handle offline scenarios or, more generally, situations in which the Internet connectivity is intermittent or not reliable: SMS can be sent if a cellular 2G dongle is attached, while data sent by IoT devices can be locally stored in a NoSQL MongoDB database. Eventually, being provided with an embedded web server, the gateway can also provide locally stored data that can be graphically displayed on users’ smartphones and tablets, through a wireless LAN connection. Ultimately, the gateway can also be used as a general purpose PC, by just connecting a keyboard and a display. All of these interactions mechanisms can be selectively enabled as needed.



Customizing data management tasks can be done in few minutes, using standard tools, simple REST API interfaces and available public Cloud platforms and services. We provide ready-to-use templates that already supports a number of publicly available IoT platform such as Node-Red, Firebase, ThingSpeak, Freeboard, GroveStream, and FIWARE as well as commonly used protocols like the MQTT. For instance, as shown in Figure 8, the gateway can be been seen as a Node-Red node to be integrated into more complex flows developed in the Node-Red graphical programming framework.





Figure 8: The proposed gateway in a Node-Red programming flow.

4.3. Cloud Platform

In order to provide a whole software stack, we also developed our own Cloud platform. It essentially collects, stores, presents, and analyzes data coming from the gateways. Moreover, it allows users to code and deploy ad hoc applications, as well as to manage their own data and assets. In order to be suitable for the African market, the Cloud platform has some key design objectives:

(i)	Easy data processing, storing and visualization

(ii)	Support for SMS, USSD, voice, mobile apps

(iii)	Support for intermittent Internet connection

(iv)	User application hosting

(v)	High data security



As depicted in Figure 9(a), users interact with the Cloud platform through a web interface, namely, the dashboard. Moreover, we provide a mobile application since, as mentioned earlier, in Africa mobile phones, represent the primary means to get access to the Internet. Those two interfaces allow users to manage the IoT assets (i.e., gateways and sensing devices). The platform also visualizes data coming from the sensing devices and let users analyze real-time and historical data coming from the gateways (the only kind of asset able to push data directly to the Cloud platform). The heart of the Cloud platform is the backend, as it implements and provides all the services necessary to manage the incoming data. Furthermore, it provides access to the social media and communication channels.





Figure 9: The proposed Cloud platform in terms of (a) block-diagram architecture and (b) backend and main software components.

In rural zones, GSM phones and coverage are extremely widespread. However, 3G/4G coverage is often not available. For this reason, users adopt SMS and voice calls to communicate. This drove the technology choice for our user interfaces: the platform supports SMS, USSD, automated voice messages, Facebook, and Twitter. SMS and automated voice messages are a must-have in rural Africa zones. USSD is also widely used because it allows a better interaction that SMS. Facebook is the primary social network used in Africa (http://www.internetworldstats.com/stats1.htm), with 170 million users.



Another constraint is the Internet connection: the Internet link can be very intermittent. However, the vast majority of current IoT platforms are very Cloud-dependent, as the endpoint of all data sources is the Cloud. In this situation, if the Internet connection is not available, then users simply cannot access their Cloud-based applications. For this reason, we developed what we call the “Local Cloud” concept: a lightweight version of the platform is able to run locally on a single PC, or even on the IoT gateway itself. Thus, when the Internet connection is not available, the data is stored locally, until the remote connection is reestablished and the data can be uploaded to the Cloud side of the platform. Furthermore, the local Cloud allows the user to access all his applications locally.



We also noticed that application hosting is a problem for the majority of African IoT developers. Indeed, hosting a single IoT application in the Cloud can be for them too expensive. For instance, a single “m4.large” virtual machine instance hosted at Amazon Web Services (AWS) EC2 costs around 80 USD/month, which is often not affordable for a single person entrepreneur, given the average African salaries. Furthermore, it requires a lot of operational competencies and has a complex maintenance. For this reason, we proposed a simple application hosting service based on the Docker container technology (https://www.docker.com/). Then, each user’s application is embedded inside a dedicated Docker container, which is pushed directly to the Cloud platform and hosted there.



Finally, data security is a must for any IoT platform. We implemented both authentication and authorization security schemes. Before accessing the Cloud platform, the user needs to authenticate himself. For this, he needs to connect to the dashboard to create an account, as a user-name/password pair. Then, all transport packets are encrypted using the HTTPS protocol. Once logged in, the user can access a variety of resources, based on his roles and attributes. For instance, by default, he has access to the assets that he physically owns (being them gateways or sensing devices). The social media access is also configurable, so as to allow only certain users to access nonfree channels like SMS.



Figure 9(b) shows the implementation of the Cloud backend. All interactions are defined and supported by a purposely developed Application Protocol Interface (API) which defines eight endpoints, namely,

(i)	sensors: create, read, update and delete sensing devices;

(ii)	data: perform complex queries on stored data;

(iii)	notifications: send messages and alerts to users based on sensor values;

(iv)	social: send direct messages on social network channels like Twitter or Facebook;

(v)	users: manage users of a particular application, as well as their access rights;

(vi)	entities: create additional assets to be managed, such as farms, fields, etc.;

(vii)	events: define complex relationships between entities (e.g., to define a complex event processing engine, CEP);

(viii)	apps: host containerized applications in the Cloud platform.



All those endpoints are protected using the Keycloak (http://www.keycloak.org/) open-source identity and access management technology. To manage data in a more abstract context, the platform integrated the FIWARE Orion (https://fiware-orion.readthedocs.io/en/master/) context broker. In this way, our platform can manage both simple data (i.e., a measurement value of 25) and more complex contexts (i.e., measurement units, geo-referenced positions, etc.). Data persistence is ensured by a MongoDB NoSQL DBMS, while such data is also sent to an ElasticSearch (https://www.elastic.co) instance, where it can be analyzed and visualized with powerful graphical tools, such as Kibana (https://www.elastic.co/products/kibana). FIWARE Cepheus (https://github.com/Orange-OpenSource/fiware-cepheus) is used to provide CEP functionalities. Finally, a specific component called “Socials” was internally developed to build and deliver notifications to the users through various social networks.



5. Use Cases

In this section, we present 3 use cases: water saving in tomato crops in Senegal, water monitoring in fish ponds in Ghana, and finally waste management in Togo.



5.1. Use Case 1: Water Saving in Tomato Crops in Senegal

While sub-Saharan Africa has ample opportunities to become one of the breadbaskets of the world, it has experienced the most severe land degradation in the world \[43]. Soil and fertilizer management is one of the biggest challenges sub-Saharan farmers are facing seasonally. There is a need to clarify the impacts of fertilizing products on the soil. In this section, we present an experiment aiming at analyzing the capacities of natural, nonchemical fertilizers. In particular, we will study the effects of fertilizers on the soil moisture retention mechanisms.



The objectives of the experiment are twofold. The first goal is to highlight the water retention mechanism depending on the type of treatment. We analyze four types of treatments: poultry manure, cow dung, mineral fertilizer, and a 50/50 mix of poultry manure and cow dung. The second objective is to highlight the impact of a specific treatment on the soil quality and the growth of the crop.



5.1.1. Overview

For the deployment, we have an area of half a hectare, in which two varieties of tomatoes crops are sown, namely, “Kiara” and “Mongol”, as shown in Figure 10. The area is partitioned into several equally dimensioned patches, such that each patch holds an experiment. A patch represents the elementary space portion where data are collected by sensors and reported to a central gateway. In each column of the patch, one type of crop is sown, either Kiara or Mongol. The color of the patch represents the type of fertilizer that will be used.





Figure 10: Deployment map of the water use case experiment.

About water management, the deployment site is irrigated by means of a dripping system. The proportion of water dropping in each sensor’s patch is checked to be the same. In this way, it is possible to measure parameters on the same basis.



5.1.2. Deployment

We deployed five IoT sensor nodes in the field, marked with codes S8 to S34 in Figure 10. Each node incorporates a small set of sensors able to collect parameters such as soil moisture, ambient temperature, and relative humidity. The goal of such a deployment is to be able to capture and analyze soil and environmental data involved in the development of the crop.



IoT nodes are connected to a local gateway, near the field, to which they forward gathered data. Data are captured from each node at regular intervals of two hours and sent to the gateway via LoRa communication (see Figure 11).





Figure 11: Deployed devices for the experiment.

Once sent to the gateway, data can be pushed to the Cloud platform using the APIs described in Section 4. The uploading process is achieved by first posting datapoints to a data broker and storing them in a flexible database following the required format. Then, historical APIs are used to extract data for future analysis, as well as plotting them on visualization tools. Examples of collected and visualized data are depicted in Figure 12: we can see the data captured by the sensors and rendered in the dashboard of the Cloud platform as two-dimensional plots. The next step will consist in acquiring enough data to assess the water retention in the ground, based on each fertilizer.





Figure 12: Visualization of the data from sensor nodes.

5.1.3. Results and Environmental Impact

The preliminary result of the experiment showed that poultry manure is the best candidate for water retention: the humidity measured stays high for a longer period of time. However, further experiments are required for this result to be statistically significant. We also identified the correlation between air temperature and soil humidity. Improvements are necessary for device calibration, deployment condition, and gateway stability for collecting data. Phase two of our deployment will take into account those results and carry out more sensors with more parameters.



5.2. Use Case 2: Aquaculture Smart Monitoring in Ghana

In the last decades, aquaculture has grown exponentially in the world, especially in developing countries. For instance, Asian developing countries now produce 89% of the total fish production worldwide \[44]. In Africa, fish production from farming has reached 2.5% of the global fish production, thanks to many fish farming development projects in the last ten years. However, this is not sufficient as many countries still have to import fish. In Ghana, for example, the combination of the annual supply of fish from capture and from aquaculture does not meet half of the country demand. This shortage in supply is expected to increase further with limited prospects for increasing marine and inland fisheries. Aquaculture has thus become pivotal in the future development but many farmers lack information to properly run a fish farm and to get a good production. This leads the farmers to make decisions based on instinct or empirical methods and may have a bad environmental impact. Indeed, they can use too many products in the water or consume too much water by changing it at the wrong time. The key is to monitor the water continuously because the optimum fish production is totally dependent on the physical, chemical, and biological qualities of the water. Unfortunately, classical water monitoring devices are too expensive for African farmers, as they can cost up to 10,000 Euros (https://in-situ.com/products/aquaculture-management/fish-pond-management/aquaculture-pond-buoy/).



We deployed a low-cost water monitoring system in a fish pond in Ghana, as can be seen in Figure 13. The system is measuring pH, temperature, and dissolved oxygen level in water and is autonomous in energy with a solar panel. It is pushing data in real-time so the farmers can see at any time the status of the water in the pond.





Figure 13: Buoy prototype diagram.

5.2.1. Deployment

As shown in Figure 14, we deployed the low-cost water monitoring device in Kumah Farms, in Kumasi, Ghana, in January 2017. This farm has 18 ponds of various size, from 120 square meters to 0.8 hectares. They grow Tilapia and Catfish, which has a life cycle of 6-8 months before being harvested. After designing the prototype and assembling the electronic parts in France, the prototype was finally assembled on site with help of African local partners and potential final users. A low-cost gateway was installed at the entry of the farm with a 3G USB dongle. The distance from the pond to the gateway is about 200m with many obstructions (e.g., vegetation and other buildings). Data was pushed to ElasticSearch servers and visualized with Kibana in the Cloud platform frontend.





Figure 14: Buoy prototype deployment.

5.2.2. Data Analysis

In Figure 15, we can see the variations of the values of pH, dissolved oxygen, and temperature in early February 2017. The first noticeable feature is that pH variation is cyclical within a day. pH falls during the night and reaches its minimum in the morning. Then it rises during the day to reach its maximum at the end of the afternoon. It is normal for pond water to have this kind of behavior. However, the variation of pH per day is up to 2.58. This is way too much as it is recommended that pH does not vary more than 0.5 within a day. With this kind of variation, it can make the fishes shocked, weakened, and stop eating. We can also notice that pH is getting too high every afternoon, above the warning level of 8.5 (in orange) and even above the critical level of 9 (in red). The strong fluctuation of pH during the day combined with high level of pH in the afternoon is symptomatic of a pond with too many algae. Algae and microorganisms use CO2 and can affect the pH of the water. Algae grow and develop quickly when hardness (the amount of CaCO3) of the water is low. The recommendation in that case \[6] is to add dolomite lime (100-200 kg/ha) to increase water hardness and a buffering agent. Water should also be changed to stabilize the growth of algae.





Figure 15: pH, dissolved oxygen, and water temperature in the fish pond.

The level of dissolved oxygen is one of the most important factors in aquaculture, as a lack of oxygen can cause fishes to die. In the figure, we can see the cyclical behavior of dissolved oxygen level in the pond. This is an expected behavior: during the day, algae and microorganisms produce oxygen through photosynthesis. During the night, as oxygen is not produced anymore, it is consumed by fish and rapidly decreases until the sun is high enough to resume photosynthesis. In this pond, we can see that the amount of oxygen produced from photosynthesis during the day is not enough to last all night long. Every morning, fish lacks oxygen. This can cause them to grow slowly or even die if the stress lasts for too long. The only way to deal with too low oxygen levels in a pond is to aerate the water with manual aerators that brass water and increase the oxygen level. In this pond configuration, aeration must be done at night to avoid the lack of oxygen in the morning.



Finally, the water temperature is also cyclical with a natural increase in day and decrease at night. In this pond, the temperature stays most of the time in the recommended range.



5.2.3. Results and Environmental Impact

With this first deployment in Kumah Farms, we pointed out two major issues in the fish pond:

(i)	The oxygen level is too low in the morning.

(ii)	The pH is too high and varies too much, because of excessive growth of macroalgae.



Both cause fishes to be stressed. In that case, fishes grow slower, they do not breed, and they can eventually die. Our recommendations to improve water quality (i.e., aerate water at night and remove algae with dolomite lime) should considerably improve the fish production yield of this farm. Moreover, we consider that the recommendations we gave will lead to smart decisions and actions, based on the real status of the fish pond. This will be the first step for a smart fish farm management with low environmental impact.



5.3. Use Case 3: Urban Waste Management in Togo

African cities have the fastest urbanization speed in the world. For instance, Kinshasa will have tripled its population by 2050. The most important challenges in African cities are the household living conditions, improvement of food security, and digitalization of the multiple sectors like waste management. In African cities, most of the informal economy relies on the house (i.e., for snacks everything is prepared for home) or the proximity of the street (i.e., access to shops and workshops front). Furthermore, we see a lack of awareness of resource management and a lack of good citizen reflexes. We see those problems as an opportunity for smart devices to compensate. Finally, the general African context and its sociology are favorable to distributed solutions such as smart grids, peer-to-peer networks, or blockchains. IoT is a key enabler in this context.



The development of the urban lifestyle in African cities is producing more waste every day. This waste accumulation is a major challenge for African cities and a huge source of pollution. This is a high time for having a proper plan for waste management and disposal system. In order to be economically sustainable, a waste collection and recycling infrastructure must also offer business opportunities for all stakeholders in the recycling chain. With this objective in mind, in this section, we discuss an automated system for waste management by using IoT technology.



5.3.1. Overview

The solution proposed is a smart waste bin that is able to send a notification when it is full. It is coupled with a network of waste collection vehicles. In contrast to the other systems worldwide, there are no fixed routes and time schedules. Instead, we follow a demand-driven approach with smaller transport vehicles. Furthermore, the solution needs to be of low cost in order to be deployed in underdeveloped countries. It includes energy-efficient devices and low rate communications.



5.3.2. Prototype

The smart bin is shown in Figure 16. The prototype is built and distributed by the local start-up SCoPE (https://docs.google.com/presentation/d/18o_ZZ6q089w62syI7W3soPxyrKsQ_m1BGM9sMj7Pz8M). It is entirely made from recycled material. The bin liner is also created from recycled drinking plastic bags, which are very common in this region.





Figure 16: Waste bin prototype.

The sensor node developed is shown in Figure 17. It consists of one Arduino Pro Mini, one LoRa radio module, and an antenna. It is powered by one 9V rechargeable battery. As detailed in Section 4, this kind of setting can have an autonomy of more than one or two years. The cost of the sensor node is around 30 Euros.





Figure 17: Waste bin sensor node.

The gateway is composed of a Raspberry Pi board, with a LoRa radio module and an antenna. It runs the software stack presented in Section 4.



5.3.3. Deployment

Figure 18 shows the localization of some of the bins in the city of Lomé, in the “Abové” neighborhood. The deployment has two phases. In the first phase, a low-tech bin has been deployed, with no intelligence at the bin. The users must send a signal themselves by phone when they see that the plastic waste bin is full. A simple smartphone application has been developed specially for this purpose. So far, 47 users have been equipped with this model of the smart bin.





Figure 18: Bins localization.

In the second phase, we are modernizing the bin, implementing a sensor node in each bin. This allows sending a notification to the platform automatically when the bin is full. We started the pilot phase with 3 users equipped.



The LoRa gateway has been deployed in the premise of the WoeLab in Togo. Due to the urban nature of this testbed, the range attainable by the LoRa network is reduced. Our tests show that the range needs to be limited to 1Km around the WoeLab, which allows us to reach 22 users.



6. Conclusions

In recent years, we witnessed a very fast economic growth in Western African countries. Unfortunately, this sharp development has also direct consequences in terms of environmental impact, both in rural and in metropolitan sites. In this respect, the Internet of Things is asked to alleviate the effects of these threats, hence realizing the concept of a green and more sustainable development. However, deploying an effective IoT platform in Western Africa countries comes with its own unique challenges. Among them, the most important is the tolerance to the effects of using low-cost, low-bandwidth, and intermittently connected-to-Internet devices. Moreover, widely accessible communication means, such as SMS and voice calls, need to be accommodated as services. In this paper, we proposed an open IoT platform that takes into account not only the environmental component but also the local economic and social aspects, so as to provide a truly sustainable solution for this region. We deployed our solution in three testbeds, dealing with soil monitoring in Senegal, water quality in fish ponds in Ghana, and waste management and collection in an urban area in Togo. In the first use case, we aimed at reducing the amount of water used with respect to the fertilizer type. In the second use case, we monitored key parameters such as dissolved oxygen and pH, which allow us to give recommendations. We optimized the fish growth and reduced wastes in those fisheries. Finally in Togo we implemented a network of smart bins, in order to reduce the waste thrown in the environment and increase recycling.
