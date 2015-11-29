//created by David Sun 2015.11.29

var friend={                    //JSON offered by back-end,  can be fetched by ajax in production environment
    "deluxe": {
        "friends": [
            "Bob Smith",
            "Jane Doe",
            "Bubba Hyde",
            "Betsy Toheavens"
        ]
    },
    "shared": {
        "friends": [
            "Bob Smith"
        ]
    },
    "animal-friendly": {
        "friends": [
            "Bob Smith",
            "Jane Doe",
            "Bubba Hyde"
        ]
    },
    "another": {
        "friends": [
            "Bob Smith",
            "Jane Doe"
        ]
    },
    "and-another": {
        "friends": []
    }
};

var roomDetail=document.getElementById("room-detail"); //put room detail in this div


//the default room displayed on the screen
roomDetail.innerHTML=roomType("deluxe");   //use roomType() to get all about the room


document.querySelector(".room-type").addEventListener('click',function(e){ //use event delegation to get the DOM which was clicked
    var element=e.target;
    if(element.tagName=='LI'){
        var room = element.dataset.name;  //the name of the room which is clicked
        roomDetail.innerHTML=roomType(room);
        selectedRoom(element); //use selectedRoom highlight the room selected
    }
    
},false);



document.querySelector(".room-type-select").addEventListener('change',function(e){
    var room = e.target.value;
    roomDetail.innerHTML=roomType(room);
    
},false);

    




//these are all the functions invoked above

function selectedRoom(element){
    var sibling=element.parentNode.children,
        length=sibling.length;

    for(var i=0;i<length;i++){
        sibling[i].className="";
    }
    
    element.className="selectedRoom";
}

function roomType(room){ //get the room detail according to the room type
    var friendsInRoom=friendsNum(friend[room].friends),  //use friendsNum() to get the number of friends in this room
        roomDescriptions;
    switch(room){
            case 'deluxe':     
                 roomDescriptions=roomDescription("fa fa-certificate",   //use roomDescription() to get the description of this room
                                 "deluxe",
                                 "subtitle deluxe deluxe deluxe",
                                 "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                 friendsInRoom);
            break;

            case 'shared':
                 roomDescriptions=roomDescription("fa fa-book",
                                 "shared",
                                 "subtitle shared",
                                 "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                 friendsInRoom);
            break;
                
            case 'animal-friendly':
                 roomDescriptions=roomDescription("fa fa-anchor",
                                 "animal friendly",
                                 "subtitle animal friendly",
                                 "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                 friendsInRoom);
            break;
                
                
            case 'another':
                 roomDescriptions=roomDescription("fa fa-bell-o",
                                 "another",
                                 "subtitle another another another ",
                                 "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                 friendsInRoom);
            break;
                
                
            case 'and-another':
                 roomDescriptions=roomDescription("fa fa-bicycle",
                                 "and another",
                                 "subtitle and another and another",
                                 "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                                 friendsInRoom);
            break;
                
                
    }
    return roomDescriptions;
}

function friendsNum(friends){      //show how many friends stay in each room
    var length=friends.length;
        friends=friends.sort();    //friends sorted by name ascending
    if(length==0){                 //0 friends
        return "";
    }else if(length==1){           //1 friend
        return "<div><i class='fa fa-user'></i>"+friends[0]+" has stayed here"+"</div>";
        
    }else if(length==2){           //2 friends
        return "<div><i class='fa fa-user'></i>"+friends[0]+" and "+friends[1]+" have stayed here"+"</div>";
        
    }else if(length==3){           //3 friends
        return "<div><i class='fa fa-user'></i>"+friends[0]+", "+friends[1]+", and 1 other friend have stayed here"+"</div>";
        
    }else{                         //4 or more friends
        return "<div><i class='fa fa-user'></i>"+friends[0]+", "+friends[1]+", and "+(length-2)+" other friends have stayed here"+"</div>";
        
    }
    
}

function roomDescription(icon,title,subtitle,description,friendsInRoom){//room description template
    return  '<header>'+
            '<i class="'+icon+'"></i>'+
            '<div>'+title+'<div>'+
            '<small>'+subtitle+'</small>'+
            '</header>'+
            '<summary>'+description+'</summary>'+
            friendsInRoom+
            '<h3>Facilities</h3>'+
            '<ul class="facilities">'+
            '<li class="fa fa-check-square-o">Television</li>'+
            '<li class="fa fa-check-square-o">CCTV</li>'+
            '<li class="fa fa-check-square-o">Bike Storage</li>'+
            '<li class="fa fa-check-square-o">Internet access</li>'+
            '<li class="fa fa-check-square-o">Microwave</li>'+
            '<li class="fa fa-check-square-o">Laundry</li>'+
            '<li class="fa fa-check-square-o">Lorem ipsum</li>'+
            '<li class="fa fa-check-square-o">lpsum lorem</li>'+
            '<li class="fa fa-check-square-o">Table and Chairs</li>'+
            '<li class="fa fa-check-square-o">Dolor sit</li>'+
            '<li class="fa fa-check-square-o">Sit amet</li>'+
            '<li class="fa fa-check-square-o">Wheelchair access</li>'+
            '<li class="fa fa-check-square-o">WIFI</li>'+
            '</ul>';
}










