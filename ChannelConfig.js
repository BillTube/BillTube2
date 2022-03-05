/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- BILLTUBE THEME CONFIGURATION ----- */
/* ----- Put this in your channel JS Before the module loader ----- */
/* ----- custom channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

UI_ChannelName = 0;		
ChannelName_Caption = 'ChannelName';

UI_ChannelAnnouncement = 0;	
ChannelAnnouncement_Title = 'custom announcement';
ChannelAnnouncement_HTML = '<center>This is a custom channel announcement!</center>';

UI_Discord = 0;	
Discord_NAME = 'name';
Discord_URL = 'discord url';

UI_Favicon = 0;			//only enable when you have a valid url in favicon_url field
Favicon_URL = 'favicon url';

/* ----- Channel guide ----- */
/* ----- requires themoviedb.org account----- */
var moviedbshow = 0;
var moviedbkey = 'api key';
var moviedblist = 'list key';

/* ----- video player ----- */
var Poster_URL= ''; //this has to be a valid Jpg or png

/* ----- channel background ----- */
var BG_Dimmed = 0;
var BGPics = ['wallpaper url', 'wallpaper url'];   //open and close the image with ' '
var BG_Stock= 1; //uses the stock wallpapers and bgpics won't be used


/* ----- channels slider ----- */
var UI_ChannelList= 0; // only enable if you have a valid json that looks exactly like mine
var Channel_JSON = 'https://cdn.jsdelivr.net/gh/BillTube/BillTube2/channels.json';
