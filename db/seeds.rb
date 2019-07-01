# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Drop all first
Artist.delete_all
Client.delete_all
Interaction.delete_all

fearbear = Artist.create name: 'Olivia Harrison', username: 'fearbear', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/297314c8f89bd600f3e1100445469b40/5D981F74/t51.2885-19/s150x150/40970299_402813163583917_4079292631308304384_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net', email: 'fearbear@test.com', password: 'artist'

jess = Artist.create name: 'Jess Chen', username: '__jesschen__', avatar: 'https://scontent-sea1-1.cdninstagram.com/vp/da7139f3d6b1981c03e5190edf6c9f5d/5D92D655/t51.2885-19/s150x150/34982397_218816662231559_7841887027183222784_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com', email: 'jess@test.com', password: 'artist'

nomi = Artist.create name: 'Nomi Chi', username: 'nomi_chi', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/9d6e02955a78315ab3f18e45ad3c7fb2/5D99ADFD/t51.2885-19/s150x150/23596480_1959154197667964_2542338945211957248_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net', email: 'nomi@test.com', password: 'artist'

zox = Artist.create name: 'Zox', username: 'foxfeet', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/8d18cfb2584396b1e54cba5e2454ce50/5D7F7FAD/t51.2885-19/s150x150/54247524_257999158485303_3604351084677562368_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net', email: 'zox@test.com', password: 'artist'

al = Artist.create name: 'Alison Ann Woodward', username: 'alisonannwoodward', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/bce15d8c47b8cfab05b3f9c40d623cc2/5D9BE768/t51.2885-19/s150x150/54457919_575564232939739_23724999911145472_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net', email: 'al@test.com', password: 'artist'

whizazaps = Artist.create name: 'Cole Bazin', username: 'whizazaps', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/e9541762b4776ca5e9b3e4f3b1e2b357/5D7B4196/t51.2885-19/s150x150/40981021_457038124817065_6744906419339788288_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net', email: 'whizazaps@test.com', password: 'artist'

nima = Client.create name: 'Nima Boscarino', email: 'nima@test.com', password: 'client'
jim = Client.create name: 'Jim Halpert', email: 'jim@test.com', password: 'client'
dwight = Client.create name: 'Dwight Schrute', email: 'dwight@test.com', password: 'client'

nima.followings.create artist: fearbear
nima.followings.create artist: nomi
nima.followings.create artist: al

jim.followings.create artist: zox
jim.followings.create artist: nomi
jim.followings.create artist: whizazaps

dwight.followings.create artist: fearbear
dwight.followings.create artist: al
dwight.followings.create artist: zox

# nima_fearbear = Inquiry.create client: nima, artist: fearbear
# nima_inquiry = InquiryInformation.create subject: 'Do you do faces?', text: "I like ur tats, I want one on face. do you do? thx", inquiry: nima_fearbear

application = Application.create client: dwight, artist: fearbear
tattoo_job = TattooInformation.create ({
  subject: 'I want a floral tattoo',
  description: 'Lots of sunflowers',
  placement: 'on my face',
  consultation: true,
  coverUp: false,
  interaction: application
})

tattoo_job.reference_images.create url: 'https://i.pinimg.com/originals/24/b4/ac/24b4ac1a18eed9379d231bc06bb6a3a7.jpg'
tattoo_job.reference_images.create url: 'https://i0.wp.com/brightercraft.com/wp-content/uploads/2018/10/img_3829.jpg?w=800&ssl=1'

application = Booking.create client: nima, artist: fearbear
tattoo_job = TattooInformation.create ({
  subject: 'Pretty butterflies',
  description: 'Butterflies leaving a jar',
  placement: 'on my chest',
  consultation: false,
  coverUp: true,
  interaction: application
})

tattoo_job.reference_images.create url: 'https://i.pinimg.com/originals/24/b4/ac/24b4ac1a18eed9379d231bc06bb6a3a7.jpg'
tattoo_job.reference_images.create url: 'https://i0.wp.com/brightercraft.com/wp-content/uploads/2018/10/img_3829.jpg?w=800&ssl=1'

application.appointments.create date: 4.days.from_now, name: '1st session', description: 'outlines and stuff', client: application.client, artist: application.artist
application.appointments.create date: 10.days.from_now, name: '2nd session', description: 'colours! bring something to eat', client: application.client, artist: application.artist

fearbear.photos.create url: 'https://static.wixstatic.com/media/1faa96_b40cb25c226c4cdc93a6b3c6595b836b~mv2.jpg/v1/fill/w_549,h_686,al_c,q_90,usm_0.66_1.00_0.01/1faa96_b40cb25c226c4cdc93a6b3c6595b836b~mv2.webp'

fearbear.photos.create url: 'https://static.wixstatic.com/media/1faa96_22d0040c498a4e44ad5f73b2354a1963~mv2.jpg/v1/fill/w_686,h_686,al_c,q_90,usm_0.66_1.00_0.01/1faa96_22d0040c498a4e44ad5f73b2354a1963~mv2.webp'

fearbear.photos.create url: 'https://static.wixstatic.com/media/1faa96_1c89befbaebd4503a027de8cce53c184~mv2.jpg/v1/fill/w_686,h_686,al_c,q_90,usm_0.66_1.00_0.01/1faa96_1c89befbaebd4503a027de8cce53c184~mv2.webp'

fearbear.photos.create url: 'https://static.wixstatic.com/media/1faa96_676d200bf22c4a599b278d82b131fa1d~mv2.jpg/v1/fill/w_549,h_686,al_c,q_90,usm_0.66_1.00_0.01/1faa96_676d200bf22c4a599b278d82b131fa1d~mv2.webp'

fearbear.photos.create url: 'https://static.wixstatic.com/media/1faa96_e272e7364c81453cb7093d261c3360fe~mv2.jpg/v1/fill/w_686,h_686,al_c,q_90,usm_0.66_1.00_0.01/1faa96_e272e7364c81453cb7093d261c3360fe~mv2.webp'

fearbear.photos.create url: 'https://static.wixstatic.com/media/1faa96_711ca1c4d3824eb78e0ecd1895697a0d~mv2.jpg/v1/fill/w_686,h_686,al_c,q_90,usm_0.66_1.00_0.01/1faa96_711ca1c4d3824eb78e0ecd1895697a0d~mv2.webp'

fearbear.photos.create url: 'https://instagram.fyvr2-1.fna.fbcdn.net/vp/0211cd1271eac488cc7069c8c8c69eee/5D91ACDC/t51.2885-15/e35/p1080x1080/58468319_445592076234879_2916524627390798880_n.jpg?_nc_ht=instagram.fyvr2-1.fna.fbcdn.net'

fearbear.photos.create url: 'https://instagram.fyvr2-1.fna.fbcdn.net/vp/87f7f213c2c0ca8d0fb6be1be0e408c0/5D99C19A/t51.2885-15/e35/s1080x1080/59183216_625039924667192_202839854506429916_n.jpg?_nc_ht=instagram.fyvr2-1.fna.fbcdn.net'

jess.photos.create url: 'https://scontent-sea1-1.cdninstagram.com/vp/e453a0ddbadbdcf41303b19e323eb7f4/5D8401BF/t51.2885-15/e35/44436326_1824698654322812_3829724848467161348_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'

jess.photos.create url: 'https://scontent-sea1-1.cdninstagram.com/vp/77b5bcc8a5a5a20f4706544b28185c3f/5D7F8CAB/t51.2885-15/e35/46585578_2289987514565700_2197355931686478857_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'

jess.photos.create url: 'https://scontent-sea1-1.cdninstagram.com/vp/ead79b4e6c7308793ccefd315a7c6ab4/5D8AF422/t51.2885-15/e35/49907583_356879521533250_1415506079390817620_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'

jess.photos.create url: 'https://scontent-sea1-1.cdninstagram.com/vp/1fecfb7aa4b60df40f78b6057ae7ba70/5D794A47/t51.2885-15/e35/57587103_133121414461358_6103459756450790608_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'

jess.photos.create url: 'https://scontent-sea1-1.cdninstagram.com/vp/24ddc08e331af79c347d1e4c440c922f/5D8E0F14/t51.2885-15/e35/53813382_866174030394369_3067582705929271193_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'

jess.photos.create url: 'https://scontent-sea1-1.cdninstagram.com/vp/4006677444bbac715701c96613db2fa0/5D7F8D62/t51.2885-15/e35/p1080x1080/62080724_1085925895128478_605962911234466528_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'

jess.photos.create url: 'https://scontent-sea1-1.cdninstagram.com/vp/66100e39019ec0e5166a5549b66121a1/5D834788/t51.2885-15/e35/47586394_778514665841211_2317540314683163586_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'

jess.photos.create url: 'https://scontent-sea1-1.cdninstagram.com/vp/561da9c16bf275c7583bc02d71af8075/5D9EDD0D/t51.2885-15/e35/45822399_2138750106392368_9156762823140246747_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'

nomi.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/ef52a3561af922b4ac8631e67d76e170/5D96196A/t51.2885-15/e35/s1080x1080/59412975_2216882615095966_60554691593011496_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

nomi.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/f316e293122276cf03136089a3ec8194/5D8C8ABB/t51.2885-15/e35/56781300_2471207309577641_3935813403125201195_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

nomi.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/2946d7f1bfaecb9aa9f4d065c2b44f08/5D7F4458/t51.2885-15/e35/54446514_630541854054964_369762092245562327_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

nomi.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/9b0bd2b8bae09769a5f22b321ef503cb/5D9D4415/t51.2885-15/e35/52666892_2285781938311639_135833581075356611_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

nomi.photos.create url: 'https://static1.squarespace.com/static/595e98ce78d1711deda89b72/5a449cfac830257df7e247b6/5a449d150d9297c68881e9b2/1514446111078/Photo+2017-10-24%2C+5+46+44+PM.jpg?format=750w'

nomi.photos.create url: 'https://instagram.fyvr2-1.fna.fbcdn.net/vp/000585d0b7ac8f8f7f48064669882d90/5D87AB51/t51.2885-15/e35/47586329_755401641499860_7363030860659933289_n.jpg?_nc_ht=instagram.fyvr2-1.fna.fbcdn.net'

nomi.photos.create url: 'https://instagram.fyvr2-1.fna.fbcdn.net/vp/b97ce8ec481164b2303a7c636970d7b6/5D9AD140/t51.2885-15/e35/54277615_308869173144109_1047759998652345926_n.jpg?_nc_ht=instagram.fyvr2-1.fna.fbcdn.net'

nomi.photos.create url: 'https://instagram.fyvr2-1.fna.fbcdn.net/vp/5fe1d380c8ceda9ff49658eca277c9bd/5D9A1F91/t51.2885-15/e35/25013788_158502254769187_1902708101681774592_n.jpg?_nc_ht=instagram.fyvr2-1.fna.fbcdn.net'

zox.photos.create url: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/9d76d19938b133f8b00f23011a89a585/5D8F1EA1/t51.2885-15/e35/p1080x1080/60806171_615643558956067_4946591314269072035_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net'

zox.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/2685577ef85507ce68ae30ad28131131/5D853FFA/t51.2885-15/e35/p1080x1080/62077895_2376999432362463_5924801470888432282_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

zox.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/594ab0c157014b266770dee1a218a9c7/5D9DDE10/t51.2885-15/e35/s1080x1080/60292475_138546773885933_6221492889710480252_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

zox.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/bee81ab0bd62d7c80838fdf517b25bb6/5D8D16D1/t51.2885-15/e35/s1080x1080/60496375_354077885507069_3187500444756994045_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

al.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/92e321d1249c82e0b03426b450796c08/5D7CFE20/t51.2885-15/e35/s1080x1080/61720922_2303094613264129_6428110240326560469_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

al.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/65c6d6f6fe0daeeb7abe2e7661b5e6e3/5D7CF2FC/t51.2885-15/e35/s1080x1080/61393547_461877027901840_273982057019839986_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

al.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/441aa8eadecb684b6e7fc746d9ce0429/5D847D08/t51.2885-15/e35/s1080x1080/60731366_579235339252389_6955496234400582604_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

al.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/bcd4516a5d400991a71fa1890abb41c2/5D897E33/t51.2885-15/e35/s1080x1080/59402490_302095690740353_823285659032242113_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

whizazaps.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/ea8d1d4e17c1ba9a6c3261e699fe3af3/5D99634C/t51.2885-15/e35/61387051_2349314518691177_6831814663627539180_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

whizazaps.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/85fff92eb80d654e4fe33a0c5777b2fa/5D7941BA/t51.2885-15/e35/60597516_365794027400721_2364107578729195164_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

whizazaps.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/a8061b2d269718c8f02f9cc8f5b9a176/5D886B78/t51.2885-15/e35/61189892_1475081599299969_4869883458390896770_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

whizazaps.photos.create url: 'https://instagram.fyvr3-1.fna.fbcdn.net/vp/f028abf8022e0dd74e223edaedaac93a/5D99C914/t51.2885-15/e35/61390923_138662523950333_7003645939359456046_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net'

fearbear.events.create name: 'Flash Event', date: 1.days.from_now
fearbear.events.create name: 'Flash Event', date: 4.days.from_now
fearbear.events.create name: 'Flash Event', date: 3.days.ago
fearbear.events.create name: 'Flash Event', date: 10.days.from_now

jess.events.create name: 'Flash Event', date: 6.days.from_now
jess.events.create name: 'Flash Event', date: 2.days.from_now
jess.events.create name: 'Flash Event', date: 7.days.ago
jess.events.create name: 'Flash Event', date: 9.days.from_now

nomi.events.create name: 'Flash Event', date: 7.days.from_now
nomi.events.create name: 'Flash Event', date: 2.days.from_now
nomi.events.create name: 'Flash Event', date: 12.days.ago
nomi.events.create name: 'Flash Event', date: 0.days.from_now

zox.events.create name: 'Flash Event', date: 5.days.from_now
zox.events.create name: 'Flash Event', date: 3.days.from_now
zox.events.create name: 'Flash Event', date: 4.days.ago
zox.events.create name: 'Flash Event', date: 8.days.from_now

al.events.create name: 'Flash Event', date: 12.days.from_now
al.events.create name: 'Flash Event', date: 9.days.from_now
al.events.create name: 'Flash Event', date: 6.days.ago
al.events.create name: 'Flash Event', date: 6.days.from_now

whizazaps.events.create name: 'Flash Event', date: 25.days.from_now
whizazaps.events.create name: 'Flash Event', date: 10.days.from_now
whizazaps.events.create name: 'Flash Event', date: 7.days.ago
whizazaps.events.create name: 'Flash Event', date: 4.days.from_now

ArtistInformation.create artist: fearbear, books_open: true
ArtistInformation.create artist: jess, books_open: true
ArtistInformation.create artist: nomi, books_open: false
ArtistInformation.create artist: zox, books_open: false
ArtistInformation.create artist: al, books_open: true
ArtistInformation.create artist: whizazaps, books_open: true
