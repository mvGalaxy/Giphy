"use strict";

    var addedButtons = ["cup cake", "cake", "chocolate", "vanilla shake", "donut","smores", "banana pudding",
        "creme brule", "tiramisu", "lolli-pop", "apple pie", "chocolate chip cookie", "ice cream", "slushie"];

    var quotes = {
        homer: [
            'The code of the schoolyard, Marge! The rules that teach a boy to be a man. Let\'s see. Don\'t tattle. Always make fun of those different from you. Never say anything, unless you\'re sure everyone feels exactly the same way you do. What else...',
            'And there\'s nothing wrong with hitting someone when his back is turned. ',
            'What? Those cute little monkeys? That\'s terrible. Who told you that?',
            'I can understand how they wouldn\'t let in those wild jungle apes, but what about those really smart ones who live among us? Who roller-skate and smoke cigars? ',
            'I\'m glad you asked, son. Being popular is the most important thing in the world!',
            'You\'re not talking about killing anyone, are you?',
            'Are you!',
            'Then run along, you little scamp! ',
            'Operator, give me the number for nine-one-one! ',
            'And Lord, we are especially thankful for nuclear power, the cleanest, safest energy source there is. Except for solar, which is just a pipe dream. ',
            'Because sometimes the only way you can feel good about yourself is by making someone else look bad. And I\'m tired of making other people feel good about themselves! ',
            'Hey Flanders, it\'s no use praying. I already did the same thing, and we can\'t both win.',
            'You heard me, I won\'t be in for the rest of the week. ... I told you! My baby beat me up! ... No, it is not the worst excuse I ever thought up. ... ',
            'Ah, good ol\' trustworthy beer. My love for you will never die. ',
            'I want to share something with you: The three little sentences that will get you through life. Number 1: Cover for me. Number 2: Oh, good idea, Boss! Number 3: It was like that when I got here. ',
            'Dear God, just give me one channel! ',
            'Barney: Hey, Homer, you\'re late for English!',
            'Pffft, English. Who needs that. I\'m never going to England. ',
            'Well, you bought all those smoke alarms, and we haven\'t had a single fire.',
            'Quiet you kids. If I hear one more word, Bart doesn\'t get to watch cartoons, and Lisa doesn\'t get to go to college. ',
            'Hey, just because I don\'t care doesn\'t mean I don\'t understand! ',
            'Son, I\'m proud of you. I was twice your age before I figured that out. ',
            'I can\'t wear a pink shirt to work. Everybody wears white shirts. I\'m not popular enough to be different... ',
            'Cartoons don\'t have any deep meaning. They\'re just stupid drawings that give you a cheap laugh. ',
            'A job\'s a job. I mean, take me. If my plant pollutes the water and poisons the town, by your logic, that would make me a criminal. ',
            'Here\'s good news! According to this eye-catching article, SAT scores are declining at a slower rate!',
            'Hey, this is the only paper in America that\'s not afraid to tell the truth, that everything is just fine. ',
            'Yeah, you know, boys, a nuclear reactor is a lot like a woman. You just have to read the manual and press the right buttons. ',
            'Because she stopped loving me.',
            'Well, I know you love me, so you don\'t get squat. Hee hee hee. ',
            'Don\'t you ever, EVER talk that way about television. ',
            'Your mother has this crazy idea that gambling is wrong. Even though they say it\'s okay in the bible.',
            'Uh... Somewhere in the back. ',
            'No matter how good you are at something, there\'s always about a million people better than you. ',
            'Well, he\'s got all the money in the world, but there\'s one thing he can\'t buy.',
            'I can\'t fake an interest in this, and I\'m an expert at faking an interest in your kooky projects.',
            'You know, the painting class, the first aid course, the whole Lamaze thing. ',
            'It takes two to lie. One to lie and one to listen. ',
            'I hate all the programs Marge likes, but it\'s no big deal. You know why?',
            'Whenever Marge turns on one of her "non-violent" programs, I take a walk. I go to a bar, I pound a few, then I stumble home in the mood for looooove. ',
            'If something\'s hard to do, then it\'s not worth doing! ',
            'Yeah, yeah! ',
            'Hmmmm Hamburgers',
            'There\'s an empty spot I\'ve always had inside me. I tried to fill it with family, religion, community service, but those were dead ends! I think this chair is the answer. ',
            'Son, if you really want something in this life, you have to work for it. Now quiet! They\'re about to announce the lottery numbers. ',
            'There you go again, always taking someone else\'s side. Flanders, the water department, God... ',
            'Uh, kind-of... b-but...',
            'I\'m not a bad guy! I work hard, and I love my kids. So why should I spend half my Sunday hearing about how I\'m going to Hell?',
            '',
            'When it comes to compliments, women are ravenous blood-sucking monsters always want\'n more... more... MORE! And if you give it to them, you\'ll get plenty back in return.',
            'I\'ll tell you when you\'re older. ',
            'You know, when I was a boy, I really wanted a catcher\'s mitt, but my dad wouldn\'t get it for me. So I held my breath until I passed out and banged my head on the coffee table. ',
            'I like stories. ',
            'If something goes wrong at the plant, blame the guy who can\'t speak English. ',
            'Well! I won\'t sleep in the same bed with a woman who thinks I\'m lazy. I\'m going to go right downstairs, unfold the couch, unroll the sleeping ba... ',
            'Son, a woman is a lot like a... a refrigerator! They\'re about six feet tall, 300 pounds. They make ice, and... um... ',
            'Well, I really should discuss this with my wife.',
            'What, you think I\'m going to buy a $20,000 truck just because you make that noise?',
            'If you\'re going to get mad at me every time I do something stupid, then I guess I\'ll just have to stop doing stupid things!',
            'It\'s not easy to juggle a pregnant wife and a troubled child, but somehow I managed to fit in eight hours of TV a day. ',
            'Kids, kids. I\'m not going to die. That only happens to bad people. ',
            'Don\'t worry, Marge. America\'s health care system is second only to Japan, Canada, Sweden, Great Britain, well, all of Europe, but you can thank your lucky stars we don\'t live in Paraguay! ',
            'Donuts...is there anything they CAN\'T do? ',
            'Let me handle this, Marge, I\'ve heard \'em all. "I like you as a friend." "I think we should see other people." "I don\'t speak English." "I\'m married to the sea." "I don\'t wanna kill you, but I will." ... Six simple words: I\'m not gay, but I\'ll learn. ',
            'Sure it is, honey. You _do_ mean stealing, don\'t you? ',
            'All right brain, you don\'t like me, and I don\'t like you. But let\'s just get me through this, and I can get back to killing you with beer. ',
            'Homer\'s brain: It\'s a deal! ',
            'Marge, I\'m going to miss you so much. And it\'s not just the sex. It\'s also the food preparation. ',
            'Marge: Homer, you\'re going to be famous!',
            'Yeah, but I\'m not gonna let it change our lives. I\'ll be the same loving father I\'ve always been.',
            'Woo-hoo! I\'m a college man! I won\'t need my high school diploma any more! ',
            'Oh, Lisa, you and your stories. "Bart is a vampire." "Beer kills brain cells." Now let\'s go back to that...building...thingy, where our beds and TV...is. ',
            'Heh, heh. Lisa, vampires are make-believe, just like elves, gremlins, and eskimos.',
            'Kill my boss? Do I dare to live out the American dream? ',
            '',
            'Hmm...ow, pointy! Eww, slimy. Oh, moving! Ah-ha! Oh, twenty dollars...I wanted a peanut!',
            'Homer\'s brain: Twenty dollars can buy many peanuts!',
            'Explain how.',
            'Homer\'s brain: Money can be exchanged for goods and services. ',
            'Huh -- wha -- Lisa! What\'s up?',
            'Oh, sure. You just lie down and tell me all about it.',
            'Aah! Bogeyman! You nail the windows shut, I\'ll get the gun! ',
            'Bart, I don\'t want to alarm you, but there may be a bogeyman or bogeymen in the house!',
            '***Aw, people can come up with statistics to prove anything, Kent. 14 percent of all people know that. ',
            'Aw, Dad. You\'ve done a lot of great things, but you\'re a very old man now, and old people are useless. ',
            'I\'m a white male, age 18 to 49. Everyone listens to me -- no matter how dumb my suggestions are. ',
            'Ah, TV respects me. It laughs _with_ me, not at me! ',
            'Are you mad, woman? You never know when an old calendar might come in handy. Sure, it\'s not 1985 now, but who knows what tomorrow will bring? And these TV Guides: so many memories. ',
            'Bart! With $10,000, we\'d be millionaires! We could buy all kinds of useful things like...love! ',
            'Marge, I agree with you -- in theory. In theory, communism works. In theory. ',
            'Son, when you participate in sporting events, it\'s not whether you win or lose: it\'s how drunk you get. ',
            'Kids, you tried your best, and you failed miserably. The lesson is, never try. Heh heh heh -- right in the butt. That was great. ',
            'In America, first you get the sugar, then you get the power, then you get the women... ',
            'Oh, and how is "education" supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home wine-making course and I forgot how to drive? ',
            'Marge, please, old people don\'t need companionship. They need to be isolated and studied so it can be determined what nutrients they have that might be extracted for our personal use. ',
            'Television! Teacher, mother, secret lover. ',
            'Lisa, if the Bible has taught us nothing else -- and it hasn\'t -- it\'s that girls should stick to girls\' sports, such as hot-oil wrestling, foxy boxing, and such-and-such. ',
            'Oh, maybe TV _is_ right. TV\'s _always_ right! ',
            'Well, Lisa, remember that postcard Grampa sent us from Florida of that alligator biting that woman\'s bottom?',
            'That\'s right, we _all_ thought it was hilarious. But it turns out we were wrong: that alligator was sexually harassing that woman. ',
            'I\'ve always wondered if there was a god. And now I know there is -- and it\'s me. ',
            'So here\'s the deal: you freeze everything as it is, and I won\'t ask for anything more. If that is OK, please give me absolutely no sign. ',
            'The information superhighway showed the average person what some nerd thinks about Star Trek. ',
            'Uh, Lisa, the whole reason we have elected officials is so we don\'t _have_ to think all the time. Just like that rainforest scare a few years back: our officials saw there was a problem and they fixed it, didn\'t they? ',
            'Marge: Homer\'s a very complicated man.',
            'Oh, OK Marge, I\'ll get along with them. Then, I will hug some snakes...yes! Then, I will hug and kiss some poisonous snakes. Now _that\'s_ sarcasm. ',
            'I\'m with you, Marge. Lisa! Get in here. In this house, we obey the laws of thermodynamics! ',
            'Lisa, if you don\'t like your job, you don\'t strike: you just go in every day and do it really half assed. That\'s the American way. ',
            'Kids, kids, kids. As far as Daddy\'s concerned, you\'re _both_ potential murderers. ',
            'Marge, you being a cop makes you the man...which makes me the woman. I have no interest in that, besides occasionally wearing the underwear, which, as we discussed, is strictly a comfort thing. ',
            'Well, it\'s like the time that your cat Snowball got run over.',
            'What I\'m saying is, all we have to do is go down to the pound and get a new jazzman. ',
            'Lisa honey, are you saying you\'re _never_ going to eat any animal again? What about bacon?',
            'Ham?',
            'Pork chops?',
            'All normal people love meat. If I went to a barbeque and there was no meat, I would say \'Yo Goober! Where\'s the meat!?\'. I\'m trying to impress people here Lisa. You don\'t win friends with salad. '
        ],
        nonHomer: [
            {
                quote: 'Age is an issue of mind over matter. If you don\'t mind, it doesn\'t matter.',
                author: 'Mark Twain'
            },
            {
                quote: 'I never took guitar lessons. I took classical piano lessons from the age of six when we lived in Holland.',
                author: 'Eddie Van Halen'
            },
            {
                quote: 'It\'s an amazing thing to say, \'I\'m beautiful,\' without feeling like you\'re cocky.',
                author: 'Christina Aguilera'
            },
            {
                quote: 'I thought it was amazing to work with authors, to get a manuscript and try to make up a cover for it.',
                author: 'Dick Bruna'
            },
            {
                quote: 'Liquid architecture. It\'s like jazz - you improvise, you work together, you play off each other, you make something, they make something. And I think it\'s a way of - for me, it\'s a way of trying to understand the city, and what might happen in the city.',
                author: 'Frank Gehry'
            },
            {
                quote: 'Resolve and thou art free.',
                author: 'Henry Wadsworth Longfellow'
            },
            {
                quote: 'What sculptors do is represent the essence of gesture. What is important in mime is attitude.',
                author: 'Marcel Marceau'
            },
            {
                quote: 'But every great scripture, whether Hebrew, Indian, Persian, or Chinese, apart from its religious value will be found to have some rare and special beauty of its own and in this respect the original Bible stands very high as a monument of sublime poetry and of artistic prose.',
                author: 'Lafcadio Hearn'
            },
            {
                quote: 'He who laughs most, learns best.',
                author: 'John Cleese'
            },
            {
                quote: 'In this business you have to develop a thick skin, but I\'m always going to feel everything. It\'s my nature.',
                author: 'Taylor Swift'
            },
            {
                quote: 'Without change, something sleeps inside us, and seldom awakens. The sleeper must awaken.',
                author: 'Frank Herbert'
            },
            {
                quote: 'Computers, like automobiles and airplanes, do only what people tell them to do.',
                author: 'Bill James'
            },
            {
                quote: 'I never really loved school through junior high, but then I started running track my freshman year, and I was just like, \'Wow, this is cool!\'',
                author: 'Regina King'
            },
            {
                quote: 'September 11, 2001, revealed heroism in ordinary people who might have gone through their lives never called upon to demonstrate the extent of their courage.',
                author: 'Geraldine Brooks'
            },
            {
                quote: 'My dad said if you become a tennis professional just make sure you get into the top hundred, because you have to make a little bit of money. You make a living so you can pay your coaching and, you know, your travels.',
                author: 'Roger Federer'
            },
            {
                quote: 'I have never killed a man, but I have read many obituaries with great pleasure.',
                author: 'Clarence Darrow'
            },
            {
                quote: 'The scientific argument advanced for intelligent design at the Dover trial, those arguments collapsed, scientifically and intellectually.',
                author: 'Kenneth R. Miller'
            },
            {
                quote: 'I think cinema is closer to allegories than to reality. It\'s closer to our dreams.',
                author: 'Manuel Puig'
            },
            {
                quote: 'In a few decades, the relationship between the environment, resources and conflict may seem almost as obvious as the connection we see today between human rights, democracy and peace.',
                author: 'Wangari Maathai'
            },
            {
                quote: 'Experience is a hard teacher because she gives the test first, the lesson afterward.',
                author: 'Vernon Law'
            },
            {
                quote: 'From my experience, politicians are much more uncomfortable being made fun of than they are being preached at and screeched at - you know, and the soapbox routine. They\'re much more uneasy knowing they\'re a target of ridicule.',
                author: 'Carl Hiaasen'
            },
            {
                quote: 'With improvisation, I just do it. It might be a total failure but then you just throw the dice again.',
                author: 'Christian Marclay'
            },
            {
                quote: 'Rather like Batman, I embody the themes of the movie which are the values of family, courage and compassion and a sense of right and wrong, good and bad and justice.',
                author: 'Gary Oldman'
            },
            {
                quote: 'I would like a food/lifestyle show. We\'re not sure what that is yet. I want to be able to share what I do and how I raise my family. I feel like I have a story to tell. I enjoy talking and listening, sharing ideas and sharing advice.',
                author: 'Cat Cora'
            },
            {
                quote: 'I still forgive him, because by doing what he did, he made it famous.',
                author: 'Alberto Korda'
            },
            {
                quote: 'I am consumed with the fear of failing. Reaching deep down and finding confidence has made all my dreams come true.',
                author: 'Arsenio Hall'
            },
            {
                quote: 'He was a bold man that first ate an oyster.',
                author: 'Jonathan Swift'
            },
            {
                quote: 'I came literally to the table with a wealth of knowledge by simply understanding how food should taste.',
                author: 'Rocco DiSpirito'
            },
            {
                quote: 'I am a lover of truth, a worshipper of freedom, a celebrant at the altar of language and purity and tolerance.',
                author: 'Stephen Fry'
            },
            {
                quote: 'If I am outspoken of the dangers of intemperance to members of our armed forces, it is because we are all especially concerned for the welfare of those who are risking their lives in the cause of freedom.',
                author: 'William Lyon Mackenzie King'
            },
            {
                quote: 'I wish I had the nerve not to tip.',
                author: 'Paul Lynde'
            },
            {
                quote: 'I don\'t think my judgment is that good. I don\'t know what is funny.',
                author: 'Jerry Stiller'
            },
            {
                quote: 'Stupidity is also a gift of God, but one mustn\'t misuse it.',
                author: 'Pope John Paul II'
            },
            {
                quote: 'I will do my best. That is all I can do. I ask for your help - and God\'s.',
                author: 'Lyndon B. Johnson'
            },
            {
                quote: 'There are no rules for good photographs, there are only good photographs.',
                author: 'Ansel Adams'
            },
            {
                quote: 'Our promise to our children should be this: if you do well in school, we will pay for you to obtain a college degree.',
                author: 'Ruth Ann Minner'
            },
            {
                quote: 'The truth. It is a beautiful and terrible thing, and must therefore be treated with great caution.',
                author: 'J. K. Rowling'
            },
            {
                quote: 'Use your health, even to the point of wearing it out. That is what it is for. Spend all you have before you die do not outlive yourself.',
                author: 'George Bernard Shaw'
            },
            {
                quote: 'Jewelry and pins have been worn throughout history as symbols of power, sending messages. Interestingly enough, it was mostly men who wore the jewelry in various times, and obviously crowns were part of signals that were being sent throughout history by people of rank.',
                author: 'Madeleine Albright'
            },
            {
                quote: 'As I get older, my sense of humor is my biggest asset.',
                author: 'David Alan Grier'
            },
            {
                quote: 'The sad thing about artificial intelligence is that it lacks artifice and therefore intelligence.',
                author: 'Jean Baudrillard'
            },
            {
                quote: 'Leisure and curiosity might soon make great advances in useful knowledge, were they not diverted by minute emulation and laborious trifles.',
                author: 'Samuel Johnson'
            },
            {
                quote: 'In youth we learn in age we understand.',
                author: 'Marie von Ebner-Eschenbach'
            },
            {
                quote: 'All the learning in the world cannot replace instinct.',
                author: 'Robert Ley'
            },
            {
                quote: 'Life well spent is long.',
                author: 'Leonardo da Vinci'
            },
            {
                quote: 'There has never yet been a man in our history who led a life of ease whose name is worth remembering.',
                author: 'Theodore Roosevelt'
            },
            {
                quote: 'The Bible is clear - God\'s definition of marriage is between a man and a woman.',
                author: 'Billy Graham'
            },
            {
                quote: 'I\'m certain that most couples expect to find intimacy in marriage, but it somehow eludes them.',
                author: 'James Dobson'
            },
            {
                quote: 'I have thought there was some advantage even in death, by which we mingle with the herd of common men.',
                author: 'Henry David Thoreau'
            },
            {
                quote: 'I basically became a cheerleader because I had a very strict mom. That was my way of being a bad girl.',
                author: 'Sandra Bullock'
            },
            {
                quote: 'A play is much easier to maintain your personal life with because if you\'re rehearsing, you\'re working like from 11 to 6 or 11 to 5 and you get to have your whole morning and your whole evening. When you\'re doing the play, you have all day.',
                author: 'Maggie Gyllenhaal'
            },
            {
                quote: 'The way I feel about music is that there is no right and wrong. Only true and false.',
                author: 'Fiona Apple'
            },
            {
                quote: 'Painting will have to deal more fully and less obliquely with life and nature\'s phenomena before it can again become great.',
                author: 'Edward Hopper'
            },
            {
                quote: 'Thank God my parents had an abundance of patience.',
                author: 'Lexa Doig'
            },
            {
                quote: 'The chief duty of government is to keep the peace and stand out of the sunshine of the people.',
                author: 'James A. Garfield'
            },
            {
                quote: 'One of my biggest pet peeves is that I just don\'t like it when characters do things that are funny to the writer, but you don\'t know why they\'re doing it and it doesn\'t make any sense.',
                author: 'Glenn Howerton'
            },
            {
                quote: 'Poetry can\'t cure cancer, but it can save your life until you die.',
                author: 'Maurice Saatchi'
            },
            {
                quote: 'With an eye made quiet by the power of harmony, and the deep power of joy, we see into the life of things.',
                author: 'William Wordsworth'
            },
            {
                quote: 'Bloomberg\'s $50 million is not going to revolutionize the electric power industry. But his willingness to fight is already inspiring others to see Big Coal differently.',
                author: 'Jeff Goodell'
            },
            {
                quote: 'I have an amazing relationship with my wife, but sometimes there are arguments. It happens.',
                author: 'Kris Allen'
            },
            {
                quote: 'I\'m actually an evangelical atheist, but there is something I recognise about religion: that it gives people a chance to surrender.',
                author: 'Brian Eno'
            },
            {
                quote: 'To be completely woman you need a master, and in him a compass for your life. You need a man you can look up to and respect. If you dethrone him it\'s no wonder that you are discontented, and discontented women are not loved for long.',
                author: 'Marlene Dietrich'
            },
            {
                quote: 'I had never been to a fashion show before going to the Burberry show last month. It was an extraordinary spectacle. I was incredibly green and had no idea what an undertaking it is. I also have a new respect for models because they are so close to the front row and must be so self-conscious.',
                author: 'Eddie Redmayne'
            },
            {
                quote: 'It is sad not to love, but it is much sadder not to be able to love.',
                author: 'Miguel de Unamuno'
            },
            {
                quote: 'Formerly, when religion was strong and science weak, men mistook magic for medicine now, when science is strong and religion weak, men mistake medicine for magic.',
                author: 'Thomas Szasz'
            },
            {
                quote: 'Research and development needs permanent tax credits to build the technology that spurs our growth. But no government programs alone can get America\'s students to study more science and math parents must push and help their children to meet this goal.',
                author: 'Ernest Istook'
            },
            {
                quote: 'The reason why men enter into society is the preservation of their property.',
                author: 'John Locke'
            },
            {
                quote: 'There is no nonsense so gross that society will not, at some time, make a doctrine of it and defend it with every weapon of communal stupidity.',
                author: 'Robertson Davies'
            },
            {
                quote: 'I long for the days when athletes were revered. I want to see the romance return to sports, to see people enjoy the game purely for the game and the players.',
                author: 'Mike Piazza'
            },
            {
                quote: 'I\'ve made an odd discovery. Every time I talk to a savant I feel quite sure that happiness is no longer a possibility. Yet when I talk with my gardener, I\'m convinced of the opposite.',
                author: 'Bertrand Russell'
            },
            {
                quote: 'Mark Twain was a great traveler and he wrote three or four great travel books. I wouldn\'t say that I\'m a travel novelist but rather a novelist who travels - and who uses travel as a background for finding stories of places.',
                author: 'Paul Theroux'
            },
            {
                quote: 'In finding love, I think it\'s important to be patient. In being in a relationship, I think it\'s important to be honest, to communicate, to respect and trust, and to strive to give more than you take.',
                author: 'Kina Grannis'
            },
            {
                quote: 'The object of the superior man is truth.',
                author: 'Confucius'
            },
            {
                quote: 'He who begins by loving Christianity more than Truth, will proceed by loving his sect or church better than Christianity, and end in loving himself better than all.',
                author: 'Samuel Taylor Coleridge'
            },
            {
                quote: 'They are patriotic in time of war because it is to their interest to be so, but in time of peace they follow power and the dollar wherever they may lead.',
                author: 'Henry A. Wallace'
            },
            {
                quote: 'No man was ever wise by chance.',
                author: 'Lucius Annaeus Seneca'
            },
            {
                quote: 'This man is frank and earnest with women. In Fresno, he\'s Frank and in Chicago he\'s Ernest.',
                author: 'Henny Youngman'
            },
            {
                quote: 'All women in Hollywood are known as sex symbols.',
                author: 'Megan Fox'
            },
            {
                quote: "Miraculously, the first time in history, steel was melted by fire. It is physically impossible.",
                author: "Rosie O'Donnell"
            },

            {
                quote: "The internet isnt a big truck..its a series of tubes",
                author: "Sen. Ted Stevens"
            },
            {
                quote: "Smoking kills. If you're killed , you've lost a very important part of your life.",
                author: "Brooke Shields"
            },
            {
                quote: "It's clearly a budget. It's got a lot of numbers in it",
                author: "George W Bush"
            },
            {
                quote: "I know how hard it is to put food on your family",
                author: "George W Bush"
            },
            {
                quote: "How Can Mirrors Be Real If Our Eyes Aren't Real",
                author: "Jaden Smith"
            },
            {
                quote: "I invented the internet",
                author: "Al Gore."
            }


        ],
        tokens: ["That's why", "So let's dance when", "It's like magic", "I have a very specific set of skills.", "Learning that", "After running 1000x marathons in 3 days."],
        endTokens: ["That's why pork-chops are delicious.", "But then again some people have to go to work and don't have time for all that.", "But nothing beats Amazon 2-day shipping.", "Tasty cheesy quesadilla can also help.", "Magic is hard.", "A eugoogoolizer…one who speaks at funerals does it, too.", "It is more tacky then piano neck tie.", "This is something our plumber can fix.", "Now we know that conditioner is better than shampoo."]
    };

    function getRandomItem(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function lowerCaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    function getQuote() {

        var homer = getRandomItem(quotes.homer);
        var nonHomerItem = getRandomItem(quotes.nonHomer);
        var qt = '"';
        return {
            quote: qt + homer + " " + getRandomItem(quotes.tokens) + " " + lowerCaseFirstLetter(nonHomerItem.quote) + getRandomItem(quotes.endTokens) + "\n\r" + qt,
            credit: nonHomerItem.author + " / Homer Simpson"
        };
    }

    console.log(getQuote());

    function addButtons(valueFromInput, checkForDuplicates) {
        let buttonIsNotAdded = addedButtons.indexOf(valueFromInput) === -1;
        console.log(valueFromInput);
        console.log(buttonIsNotAdded);
        if(checkForDuplicates===false){
            console.log(checkForDuplicates);
            console.log(valueFromInput);
            var inputTag = "<input class=\'giphyBtn animated heartBeat delay-1s slow\' type=\'button\'" +
                ` value='${valueFromInput}' onclick='Test(event)' />`;

            $("#buttonDestinationContainer").append(inputTag);
            return;
        }
        else{
            if (buttonIsNotAdded) {
                var inputTag = "<input class=\'giphyBtn animated heartBeat delay-1s slow\' type=\'button\'" +
                    ` value='${valueFromInput}' onclick='Test(event)' />`;
                $("#buttonDestinationContainer").append(inputTag);//getRandomItem(quotes.homer)
                return;
            } else {
                alert("This has been added");
            }
        }
    }


    function initialize() {
        addedButtons.forEach(b => addButtons(b, false));
        console.log("added buttons are:");
        console.log(addedButtons);
    }


    async function Test(e) {
        console.log(e);
        console.log("value of input is" + e.target.value);
        console.log("button event worked");

        async function doAjax(ajaxurl) {

            const result = await $.ajax({
                url: ajaxurl,
                type: 'GET',

            });

            return result;
        }

        var retrievedImgs = await doAjax(`https://api.giphy.com/v1/gifs/search?api_key=FKJbsC9pbWTFIuby5WHvippAkkbIAIsH&q=${e.target.value}&limit=40`);

        $("#giphyLoadingContainer").empty();
        var loadingArea = $("#giphyLoadingContainer");


        retrievedImgs.data.slice(0, 9).forEach(dp => loadingArea.append(consCard(dp.images.preview_gif.url, dp.rating, getQuote())));

        // language=HTML
        function consCard(imageSource, rtg, someQuote) {
            let gifCard = "\n<div class=\"card d-inline-block\">\n " +
                `   <img class=\"card-img-top\" src=\"${imageSource}\" alt=\"\">\n  ` +
                "  <div class=\"card-body\">\n   " +
                `     <h4 class=\"card-text\"> 
                 ${someQuote.quote}
              </h4>\n   ` +
                `<div class="card-footer">-${someQuote.credit}</div>\n` +
                "   </div>\n</div>";
            return gifCard;
        }



    }
    initialize();



    $("body").on("click", "#searchAreaBtn", () => {
        console.log("button clicked to add");
        var valueFromInput = $("#searchAreaInput").val();
        addButtons(valueFromInput, true);
    });
