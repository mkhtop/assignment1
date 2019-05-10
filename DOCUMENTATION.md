
# 1.1 Documentation

## 1.1.1 Background
A local skateboard shop (Beans and Boards) have a loyal customer base that use the shop for their point of contact for all things skateboarding related. “Is the park dry?” Is a common question that the shop owners receive on a regular bases. With a designated website to update customers on the weather conditions at the local skatepark this enables customers to check on the park if the shop isn’t available to answer. As an added benefit, this will also allow the shop to publicise an added service to their customers.

## 1.1.2 Wire frames
Below are wireframes for each page of the website. For the purpose of these wire frames the mobile and desktop screens have been stretched in height to display the whole design of each page. 

### MOBILE
### Mobile index page
<img src="/img/MOBILE-INDEX.png" width="200">
### Mobile weather page
<img src="/img/MOBILE-WEATHER.png" width="200">
### Mobile team page
<img src="/img/MOBILE-TEAM.png" width="200">
### Mobile shop page
<img src="/img/MOBILE-SHOP.png" width="200">
### DESKTOP
### Desktop index page
<img src="/img/WEB-INDEX.png" width="400">
### Desktop weather page
<img src="/img/WEB-WEATHER.png" width="400">
### Desktop team page
<img src="/img/WEB-TEAM.png" width="400">
### Desktop shop page
<img src="/img/WEB-SHOP.png" width="400">

## 1.1.3 Colour Choices
As Beans and Boards currently has a website for their products the choice of colours will be to match the existing website. This will allow for continuity between the sites and give customers a seamless change from one to the other. The existing beans and board website current uses a minimalist look, using yellow, white and light greys. Being a weather site, these colours will be incorporated well matching types of weather. To differentiate between the two sites, blue has been added to the weather site to incorporate the sense of the sky.

## 1.1.4 Accessibility
After looking at the W3C guidelines regarding the Web Content Accessibility Guidelines [WCAG2](https://www.w3.org/WAI/WCAG21/quickref/) requirements. I have ensured that the website meets the specification where necessary. Examples of these requirements can be seen below:

- Alternative descriptive text for images
- Word description for weather for if images are not possible
- Ensuring high contrast between text and backgrounds
- Web pages have titles that describe topic or purpose

## 1.1.5 GDPR
When collecting information from a user there is a General Data Protection Regulation (GDPR) that provides individuals with the following rights:
1. The right to be informed
2. The right of access
3. The right to rectification
4. The right to erasure
5. The right to restrict processing
6. The right to data portability
7. The right to object
8. Rights in relation to automated decision making and profiling.

It is important to address these points in a privacy policy. As the website is only displaying information it collects no data from the user, in addition the location for each location is pre-entered in the javascript. The beans and boards weather site will not require a privacy policy, although a privacy page has been added to the footer to confirm to the end that no data is collected for the end user if they had any concerns.

## 1.1.6 Distance Selling
In 2014 the legislation regarding Distance Selling Regulations were replaced be the Consumer Contracts Regulations. There are requirements set out by the regulation, these apply to any website selling goods. As this website is not selling a product this will not apply. As the site is closely affiliated with the web shop, a link has been added to the privacy page to redirect to the beans and boards terms and conditions. I have also checked the web shop to which they do comply with the relevant Consumer Contracts Regulations.

## 1.1.7 Evaluation
The initial problem for the website to solve was to be able to display live weather for each of the local skate spots. It was important to create a clear and easy to understand site that would accurately display these weather conditions.  Having a designated page to display these results made the most logical sense and achieved the desired look and functionality. 

When designing the website, a key goal from the beginning was to have the overall look very similar to the current beans and boards site. It was important to match the colours accurately and have the same minimalist design. This was possible with having simple, clear headings with a plain white background.

Thanks to the minimalist design it made it possible to have a website that could easily adapt when it needed to be responsive. By using developer tools such as the one in Google Chromes browser it was possible to ensure that as the screen size increased the website would adjust nicely. To also test the real life application, the site was tested on a laptop, iPad and iPhone. Following these test it was evident that a main attribute that would need to change would be font-size. This problem was overcome with the use of a breakpoint in the css.

There were some initial issues when trying to access the weather api and its retrieved JSON file. After being able to log the data into the console log, viewed from the developer tools previously mentioned, I was able to understand the data’s structure and how to access the required information.

Overall I feel that the website has achieved its purpose and solved a problem while also adding some extra information about the Beans and Boards shop. I would consider this site just the beginning for what could be possible in the future in regards to adding additional weather functionality such as hourly forecasts.