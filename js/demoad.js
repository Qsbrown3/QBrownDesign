

1

(function() {

2



3

    var filename = 'https://tympanus.net/codrops/adpacks/demoad.css?' + new Date().getTime();

4

    var fileref = document.createElement("link");

5

    fileref.setAttribute("rel", "stylesheet");

6

    fileref.setAttribute("type", "text/css");

7

    fileref.setAttribute("href", filename);

8

    document.getElementsByTagName("head")[0].appendChild(fileref);

9

    /*

10

    var cdaLink = 'https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=17972_5_1_16';

11

    var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';

12

    var cdaImgAlt = 'Divi';

13

    var cdaText = "From our sponsor: Divi is more than just a WordPress theme, it's a completely new website building platform. Try it.";

14

    */

15



16

    var cdaLink = 'https://ad.doubleclick.net/ddm/clk/459321073;263127775;j';

17

    var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';

18

    var cdaImgAlt = 'Mailchimp';

19

    var cdaText = "Need a hand with your marketing? No problem. Now you can access 200+ pre-built integrations for your app with Mailchimp.";

20



21

​

22

    /*

23

    var cdaLink = 'https://bit.ly/2Jen9Md';

24

    var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/amelia.png';

25

    var cdaImgAlt = 'Amelia';

26

    var cdaText = "Build time-saving appointment and event booking websites easily with the Amelia WordPress plugin.";

27

    */

28

​

29

    var cda = document.createElement('div');

30

    cda.id = 'cdawrap';

31

    cda.style.display = 'none';

32

    cda.innerHTML = '<a href="'+cdaLink+'" class="carbon-img" target="_blank" rel="sponsored"><img src="'+cdaImg+'" alt="'+cdaImgAlt+'" border="0" height="100" width="130"></a><a href="'+cdaLink+'" class="carbon-text" target="_blank" rel="noopener">'+cdaText+'</a><div class="cda-footer"><a class="carbon-poweredby" href="https://tympanus.net/codrops/advertise/" target="_blank" rel="noopener">Become a sponsor</a><span class="cda-remove" id="cda-remove">Close</span></div>';

33

    document.getElementsByTagName('body')[0].appendChild(cda);

    setTimeout(function() {

36

        cda.style.display = 'block';

37

    }, 1000);

38

​

39

    document.getElementById('cda-remove').addEventListener('click', function(e) {

40

        cda.style.display = 'none';

41

        e.preventDefault();

42

    });

43



44

})();
