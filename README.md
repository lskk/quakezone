# ecn-mobile
App mobile ECN 
## Milestone 1
  ### To do
    1.Add endoints in communications/ApiEndpoints.js
      1.openweather endpoint
      2.Our server endpoints
    2.Home screen
      1.Finish bottom part (earthquake information). Most part is done 
      2.Send request as to our server as to openweather
    3.Earthquake map screen
      1.Do request to our server and fill data
    4.Safety screen
      1.Need only past text to project to automaticly fill it in screen
    5.About
    
  ###Done
    1.Done Rest client for communication wraps tow methods get and post
    2.Home screen mostly done
    3.Equake map: integrated mapbox with information of equake
    4.Safety screen: Created expander to expand text and TermsAndConditions for information
    5.Historical Backlog
    
  ###Architecture
    1.Screens locates in **screens** folder
    2.pictures for Home screen and for Logo of aplication locates in **assets** folder
    3.Communication contains files for communication with REST SERVERS as for opeenweahter as for our rest api
    4.Components contains common components
    5.NAvigator contains navigation components
  
  ##NOTE: There is an issue related to mapbox gl and react-native
  Link:https://github.com/nitaliano/react-native-mapbox-gl/issues/1538
  In case of was not able to build project do following
  
  $ react-native eject
  $ react-native link
