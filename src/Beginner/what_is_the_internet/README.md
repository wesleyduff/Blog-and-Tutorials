# How the internet works 
You will learn 
- When and why the internet was developed
- How the internet evolved to what it is today
- network
- router
- wifi
- modem
- ISP
- IP address
- DNS names
- Difference between the Internet and the Web

## Creation of the internet
- The internet is a large network of computers which communicate together.
- Began in the 1960s as a Us-army funded project. The amount of data collected by the government needed a secure infrastructure in order to handle the load.
- 1980's private companies, public universities and the government added to growth of the internet
- The internet was evolved to allow large volumns of data to be shared by many compaines and the government.
- The basic idea of the internet hasn't changed, even through the technology has. The basic concept of the internet is to connect many computers together and have them stay connected no matter what.

## Step one : The internet is a network
__What is a network__
- Most basic, two computers linked together. Cables, Wireless(wifi) and bluetooth are a few
- Linking computers by cables can become a mess.
  - Lets say we have 10 coputers and each computer needs to have access to eachother. Each computer will need to have 9 cables attached to it for the other 9 computers on the network. This can become very messy as the illustration below shows.

<img height="300" src="./assets/network_cables_10.png" alt="network of 10 computers" />

- To simplify this we use a router

__What is a router__
- A router is a tinny computer
- You can think of a router like a traffic cop, the cop directs traffic to where it needs to go. A router directs requests to the correct connected computer.
- Each computer on our system gets connected to our router
  - this now brings the amount of cables needed from 45 down to 10.

<img height="300" src="./assets/router.png" alt="Computers connected as a network to our router" />

- For example: Computer A makes a request to computer B. Computer A sends the request for information for computer B to the router. The router then forwards the request to computer B. Computer B then responds with the request back to the router. The router then sends the response from computer B to comptuer A.

__What if we had many networks that want to talk to eachother?__
- Remember, routers are computers too
- Lets say Network 1 has 5 computers and Network 2 has 5 comptuers. 
  - Each one of the computers are attached to a router on their network. 
  - We can connect routers together just like we connected computers to the router. 
  - Now Network 1 and Network 2 are connected and each one of those computers can access any of the computers on the network.
  
<img height="300" src="./assets/network_1.png" alt="Computers connected as a network to our router and routers connected with other computers" />

- By connecting computers to routers, then routers to ther routers, our network can then become infinite.

<img height="300" src="./assets/network_2.png" alt="Computers connected as a network to our router and a central router connecting other router and networks" />

_The idea of the internet should be coming into focus now :)_

## Step 2: The Internet (network) on a Global Level
Wait a minute! This is great, but this structure is built for our own purposes and not for a gloabl network.
_Yes, you are right. Here is how our networks gains access to the world._
- Other businesses, governemnt networks, private networks all of these networks need to speak to eachother.
- We cannot add cables to each network around the world, so how can this be done?
  - We allready have cables coming into our homes and businesses. These cables include, power, telephone and others. 
  - Everyone has a phone line, so that is/was the best way to connect all computer networks together. (now we are based off of optical cables, but we will keep with the telephone example)
  - In order for our network to be added to the global network that is the internet, our network must be able to communicate over the telephone network. This is where the "modem" comes into the picture.

__What is a modem__
- A modem converts our signal from our network into a message that can be delivered over the telephone infrastructure and vice versa

<img height="300" src="./assets/network_modem_tele.png" alt="Computers connected as a network to our router and a central router connecting other router and networks" />

__We are connected to the internet! But, how does our network talk to other networks on a global level?__
- In order to send our network signal through the telephone service, we need to connect our network to an ISP (_internet service provider_)

__What is an ISP__
- an ISP is a company that manages many routers that connect to other ISPs. This is the compnay you pay for your 100mb per second speeds.

- The message from our network, transpiled by our modem, is sent to our ISP. The ISP takes our message and delivers it to another ISP and that ISP then sends the request to the intended computer.
- The internet consists of many networks that in themselves are private, public networks like ours and ISP networks.

<img height="300" src="./assets/network_ISP.png.png" alt="Networks and ISP networks" />



  
