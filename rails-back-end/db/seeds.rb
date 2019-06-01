# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Drop all artists first
Artist.all.each do |a|
  a.destroy
end

Client.all.each do |a|
  a.destroy
end

Interaction.all.each do |a|
  a.destroy
end

fearbear = Artist.create name: 'Olivia Harrison', username: 'fearbear', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/297314c8f89bd600f3e1100445469b40/5D981F74/t51.2885-19/s150x150/40970299_402813163583917_4079292631308304384_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net'

nomi = Artist.create name: 'Nomi Chi', username: 'nomi_chi', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/9d6e02955a78315ab3f18e45ad3c7fb2/5D99ADFD/t51.2885-19/s150x150/23596480_1959154197667964_2542338945211957248_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net'

zox = Artist.create name: 'Zox', username: 'foxfeet', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/8d18cfb2584396b1e54cba5e2454ce50/5D7F7FAD/t51.2885-19/s150x150/54247524_257999158485303_3604351084677562368_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net'

al = Artist.create name: 'Alison Ann Woodward', username: 'alisonannwoodward', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/bce15d8c47b8cfab05b3f9c40d623cc2/5D9BE768/t51.2885-19/s150x150/54457919_575564232939739_23724999911145472_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net'

whizazaps = Artist.create name: 'Cole Bazin', username: 'whizazaps', avatar: 'https://instagram.fyvr4-1.fna.fbcdn.net/vp/e9541762b4776ca5e9b3e4f3b1e2b357/5D7B4196/t51.2885-19/s150x150/40981021_457038124817065_6744906419339788288_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net'

nima = Client.create name: 'Nima Boscarino'
jim = Client.create name: 'Jim Halpert'
dwight = Client.create name: 'Dwight Schrute'

nima_fearbear = Interaction.create client: nima, artist: fearbear, text: 'Hey can I have tattoo'
nima_nomi = Interaction.create client: nima, artist: nomi, text: 'Wow so cool tats pls'
jim_nomi = Interaction.create client: jim, artist: nomi, text: 'I need tattoo of my wife'

