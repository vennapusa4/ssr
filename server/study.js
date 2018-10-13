/*
two servers 
server (step1)- for taking care of server+react

client (step2)-for taking care of react+script


major problems
redux config is diff in server

------------
 
------------
authenaction

***********************
here diff way
bcoz we r making req from server to api server
***********************
updation
-----

1.rerender again
2.attch a fun each comp wait tr for resp an render

-------
you need to rehydration
---------
 what is it
html server  won't match clent html

ex- when u r showing list of users on userspage intally browser loads browser version html which doesn't have users list so u get li in ul error
then server loads
server store won,t send to browser
to slove this u ned to pass the initial state to the browser version
---------
regeneratorRuntime is not defined
it occur bcoz of aync await

for proxy tr are 2 setups one server  2nd client

server we are making req to original req by appending cookie  
in case of client  we making req by changing proxy so same domain no need to send

*/