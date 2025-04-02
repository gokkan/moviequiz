// --- Paste the `allQuestions` array from step 1 here ---
const allQuestions = [
    { question: "What is the name of the spaceship in Alien?", correct: "Nostromo", incorrect1: "Nebuchadnezzar", incorrect2: "Discovery", incorrect3: "Mothership", incorrect4: "U.S.S. Enterprise", tags: "1979, sci-fi, " },
    { question: "Who plays the evil knight Kato in Mio, My Mio", correct: "Christopher Lee", incorrect1: "Anthony Edwards", incorrect2: "Jeremy Irons", incorrect3: "Bela Lugosi", incorrect4: "Max Schreck", tags: "1987, Actor" },
    { question: "Which actor acts alongside Robert De Niro in Awakenings?", correct: "Robin Williams", incorrect1: "Robert Duvall", incorrect2: "Ellen Barkin", incorrect3: "Ray Liotta", incorrect4: "Joe Pesci", tags: "1990, Actor" },
    { question: "What does the film crew follow in Man Bites Dog?", correct: "A murderer", incorrect1: "A policeman", incorrect2: "A dog catcher", incorrect3: "A lawyer", incorrect4: "A housewife", tags: "1992" },
    { question: "Who wrote the novel which The Big Sleep from 1946 is based upon?", correct: "Raymond Chandler", incorrect1: "Elmore Leonard", incorrect2: "Dashiell Hammett", incorrect3: "James M. Cain", incorrect4: "Graham Greene", tags: "1946, Novel" },
    { question: "In Evil Dead 3 - Army of Darkness, Ash has to speak the words \"Klaatu Verata Nikto\". It is slightly modified but from what film is it originally?", correct: "The Day the Earth Stood Still", incorrect1: "Devil Girl From Mars", incorrect2: "The Thing From Outer Space", incorrect3: "It Came From Outer Space", incorrect4: "Invasion From Mars", tags: "1992, Horror, Comedy, Quote" },
    { question: "Which Baldwin brother acted in The Usual Suspects?", correct: "Stephen", incorrect1: "Alec", incorrect2: "Daniel", incorrect3: "William", incorrect4: "Ingen", tags: "1995, Gossip" },
    { question: "Who directed Driller Killer?", correct: "Abel Ferrara", incorrect1: "Tobe Hooper", incorrect2: "Michael Powell", incorrect3: "Lucio Fulci", incorrect4: "Dario Argento", tags: "1979, Horror" },
    { question: "Jaws, the villain with teeths of steel, makes his first appearance, in which Bond film?", correct: "The Spy Who Loved Me", incorrect1: "Moonraker", incorrect2: "Octopussy", incorrect3: "Casino Royale", incorrect4: "Thunderball", tags: "1977, Action, Title" },
    { question: "Where does Phil Connors (Bill Murray) wake up, over and over again in Groundhog Day?", correct: "Punxsutawney", incorrect1: "Falls Creek", incorrect2: "Aspen", incorrect3: "San Fransisco", incorrect4: "Danger Bay", tags: "1993, Comedy, " },
    { question: "Who plays the man who has doubts regarding the accused mans guilt in 12 Angry Men?", correct: "Henry Fonda", incorrect1: "Cary Grant", incorrect2: "James Stewart", incorrect3: "Gregory Peck", incorrect4: "Robert Mitchum", tags: "1957, Actor" },
    { question: "Which film was Bela Lugosis last?", correct: "Plan 9 From Outer Space", incorrect1: "Dracula", incorrect2: "The Black Sleep", incorrect3: "The Wolf Man", incorrect4: "Bride of the Monster", tags: "Title" },
    { question: "Sorcerer by William Friedkin is a remake of which french film?", correct: "The Wages of Fear (Le Salaire de la peur)", incorrect1: "La Jetée", incorrect2: "The Four Hundred Blows (Les Quatre cents coups)", incorrect3: "Pickpocket (Incertitude)", incorrect4: "Diary of a Country Priest (Journal d'un curé de campagne)", tags: "Title, Remake, 1977" },
    { question: "In what year does Blade Runner take place?", correct: "2019", incorrect1: "2020", incorrect2: "2021", incorrect3: "2010", incorrect4: "3000", tags: "1982, sci-fi" },
    { question: "What is the name of the gang we get to know in Bound By Honor (Blood In Blood Out)?", correct: "Vatos Locos", incorrect1: "La Onda", incorrect2: "The Sharks", incorrect3: "Los Carnales", incorrect4: "East Side Locos", tags: "1993" },
    { question: "What is the name of Steven Seagals character in Under Siege?", correct: "Casey Ryback", incorrect1: "John Matrix", incorrect2: "Nico Toscani", incorrect3: "Forrest Taft", incorrect4: "Jack Taggart", tags: "1992, Character" },
    { question: "What has replaced toilet paper in Demolition Man?", correct: "Three Sea Shells", incorrect1: "Sonic Bidets", incorrect2: "Laser Wipes", incorrect3: "Air Dryers", incorrect4: "Nutrient Pastes", tags: "1993, sci-fi" },
    { question: "In what year were Terminator 2: Judgement Day released?", correct: "1991", incorrect1: "1990", incorrect2: "1992", incorrect3: "1993", incorrect4: "1994", tags: "sci-fi" },
    { question: "Who directed Strange Days?", correct: "Kathryn Bigelow", incorrect1: "James Cameron", incorrect2: "Ridley Scott", incorrect3: "Luc Besson", incorrect4: "Andrew Niccol", tags: "1995, sci-fi" },
    { question: "Which Hitchcock film features James Stewart?", correct: "Rope", incorrect1: "Psycho", incorrect2: "Notorious", incorrect3: "Spellbound", incorrect4: "Rebecca", tags: "Title" },
    { question: "What century does Andrey Rublyov take place?", correct: "15th Century", incorrect1: "14th Century", incorrect2: "16th Century", incorrect3: "17th Century", incorrect4: "18th Century", tags: "" },
    { question: "Alfred Hitchcock made a remake on one of his own films, which one?", correct: "The Man Who Knew Too Much", incorrect1: "Vertigo", incorrect2: "The Birds", incorrect3: "The 39 Steps", incorrect4: "Shadow of a Doubt", tags: "" },
    { question: "How many adaptations for the screen of the novel by Lew Wallaces were made before the version from 1959 with Charlton Heston as Ben-Hur.", correct: "2", incorrect1: "1", incorrect2: "0", incorrect3: "3", incorrect4: "4", tags: "1959" },
    { question: "Which film, directed by Stanley Kubrick, takes place during the First World War?", correct: "Paths of Glory", incorrect1: "What Price Glory", incorrect2: "A Farewell to Arms", incorrect3: "Gallipoli", incorrect4: "Dr. Strangelove", tags: "" },
    { question: "In Monty Python and the Holy Grail, Sir Galahad follows a grail shaped light to a castle inhabited by eight score blondes and brunettes, all between sixteen and nineteen-and-a-half. What is the name of the castle?", correct: "Castle Anthrax", incorrect1: "Swamp Castle", incorrect2: "Castle Antioch", incorrect3: "Camelot", incorrect4: "Castle Aaargh", tags: "1975" },
    { question: "What room number is Danny warned not to enter in The Shining?", correct: "237", incorrect1: "430", incorrect2: "666", incorrect3: "321", incorrect4: "1408", tags: "1980, Horror" },
    { question: "How many million dollars must Montgomery Brewster spend in Brewster's Millions", correct: "30", incorrect1: "1", incorrect2: "100", incorrect3: "3", incorrect4: "300", tags: "" },
    { question: "Who plays the part of Monsieur Hulot in Mon Oncle?", correct: "Jacques Tati", incorrect1: "Henri Marquet", incorrect2: "Jean-Paul Belmondo", incorrect3: "Gerard Depardieu", incorrect4: "Henri Serre", tags: "" },
    { question: "The plot outline of Deconstructing Harry by Woody Allen is similar to a movie by Ingmar Bergman. Which one?", correct: "Wild Strawberries", incorrect1: "Autumn Sonata", incorrect2: "Persona", incorrect3: "The Seventh Seal", incorrect4: "Cries and Whispers", tags: "1958" },
    { question: "What is the most common name in the town Rock Ridge in Blazin Saddles?", correct: "Johnson", incorrect1: "Smith", incorrect2: "Henderson", incorrect3: "Watson", incorrect4: "O'Reilly", tags: "1974" },
    { question: "Who plays Hughie Warriner, the man who is rescued by John (Sam Neill) and Rae (Nicole Kidman), in Dead Calm?", correct: "Billy Zane", incorrect1: "Kiefer Sutherland", incorrect2: "Gary Oldman", incorrect3: "Tim Roth", incorrect4: "Viggo Mortensen", tags: "" },
    { question: "Which word originates from La Dolce Vita?", correct: "Paparazzi", incorrect1: "Diva", incorrect2: "Cameo", incorrect3: "Maestro", incorrect4: "Fellini-esque", tags: "" },
    { question: "Which film is Martin Scorsese's The Departed a remake of?", correct: "Infernal Affairs", incorrect1: "Oldboy", incorrect2: "Hard Boiled", incorrect3: "The Killer", incorrect4: "A Better Tomorrow", tags: "" },
    { question: "For which film did Martin Scorsese recieve an Oscar for Best Director?", correct: "The Departed", incorrect1: "Raging Bull", incorrect2: "Taxi Driver", incorrect3: "Goodfellas", incorrect4: "Cape Fear", tags: "" },
    { question: "In what town does Chinatown take place?", correct: "Los Angeles", incorrect1: "New York", incorrect2: "San Fransisco", incorrect3: "Houston", incorrect4: "Las Vegas", tags: "" },
    { question: "What's the name of the sequel to Chinatown?", correct: "The Two Jakes", incorrect1: "Gittes returns", incorrect2: "San Fransisco Nights", incorrect3: "Chinatown 2", incorrect4: "The Missouri Breaks", tags: "" },
    { question: "Which novel by Virginia Woolf plays a big part in The Hours?", correct: "Mrs. Dalloway", incorrect1: "To the Lighthouse", incorrect2: "Orlando", incorrect3: "The Waves", incorrect4: "The Years", tags: "" },
    { question: "What does Mr. Pink refuse to do in the opening scene of Reservoir Dogs?", correct: "Leave a tip", incorrect1: "Finish his coffee", incorrect2: "Say \"thank you\"", incorrect3: "Leave the diner", incorrect4: "Order food", tags: "" },
    { question: "Who played the novelist Paul Sheldon in Misery?", correct: "James Caan", incorrect1: "Gene Hackman", incorrect2: "John Hurt", incorrect3: "Harrison Ford", incorrect4: "Michael Douglas", tags: "" },
    { question: "What year does Escape From New York take place?", correct: "1997", incorrect1: "1999", incorrect2: "2019", incorrect3: "2011", incorrect4: "2023", tags: "" },
    { question: "Who directed The Wild Bunch (1969)?", correct: "Sam Peckinpah", incorrect1: "William A. Wellman", incorrect2: "Fred Zinneman", incorrect3: "Sergio Leone", incorrect4: "John Ford", tags: "" },
    { question: "Who plays Darkman in the movie with the same name?", correct: "Liam Neeson", incorrect1: "Bruce Campbell", incorrect2: "Tim Robbins", incorrect3: "Alec Baldwin", incorrect4: "Kevin Bacon", tags: "" },
    { question: "Who directed Pirates of the Caribbean: The Curse of the Black Pearl?", correct: "Gore Verbinski", incorrect1: "James Mangold", incorrect2: "Michael Bay", incorrect3: "Renny Harlin", incorrect4: "Chris Columbus", tags: "" },
    { question: "What does Taylor (Charlton Heston) find on the shore in the end of Planet of the Apes?", correct: "Statue of Liberty", incorrect1: "Eiffel Tower", incorrect2: "A spaceship", incorrect3: "Nothing", incorrect4: "His friends", tags: "" },
    { question: "Who plays Sam Spade in The Maltese Falcon (1941)?", correct: "Humphery Bogart", incorrect1: "Cary Grant", incorrect2: "Joseph Cotten", incorrect3: "Orson Welles", incorrect4: "Gary Cooper", tags: "" },
    { question: "What does Cary Grant play in His Girl Friday?", correct: "Newspaper Editor", incorrect1: "Lawyer", incorrect2: "Farmer", incorrect3: "Psychologist", incorrect4: "Secret Agent", tags: "" },
    { question: "Which was Lauren Bacall's film debut?", correct: "To Have and Have Not", incorrect1: "The Big Sleep", incorrect2: "Dark Passage", incorrect3: "Key Largo", incorrect4: "Confidential Agent", tags: "" },
    { question: "Who plays John Shaft in the movie Shaft (1971)?", correct: "Richard Roundtree", incorrect1: "Isaac Hayes", incorrect2: "Fred Williamson", incorrect3: "Ron O'Neal", incorrect4: "Melvin van Peebles", tags: "1971" },
    { question: "On which floor is LesterCorp located in Being John Malkovich?", correct: "7½", incorrect1: "8", incorrect2: "8½", incorrect3: "6½", incorrect4: "5½", tags: "" },
    { question: "Who directed The Lives of Others (Das Leben der Anderen)?", correct: "Florian Henckel von Donnersmarck", incorrect1: "Tom Tykwer", incorrect2: "Wolfgang Becker", incorrect3: "Dennis Gansel", incorrect4: "Uli Edel", tags: "" },
    { question: "Who played Adolf Hitler in Downfall (Der Untergang)?", correct: "Bruno Ganz", incorrect1: "Anthony Hopkins", incorrect2: "Max von Sydow", incorrect3: "Stellan Skarsgård", incorrect4: "Alec Guinness", tags: "" },
    { question: "In what building does Cary Grant and Deborah Kerr decide to meet in An Affair to Remember?", correct: "The Empire State Building", incorrect1: "The Eiffel Tower", incorrect2: "World Trade Center", incorrect3: "Pentagon", incorrect4: "Fort Knox", tags: "1957" },
    { question: "In Christmas Vacation (1989) aunt Bethany brings two christmas gifts. One contains Jell-O. What does the other one contain?", correct: "A cat", incorrect1: "A hammer", incorrect2: "A hat", incorrect3: "A turkey", incorrect4: "A toupée", tags: "1989" },
    { question: "Complete the title: The Diving Bell and the...", correct: "Butterfly", incorrect1: "Knife", incorrect2: "Diver", incorrect3: "Ocean", incorrect4: "Left eye", tags: "2007" },
    { question: "How old was Paul Thomas Anderson when he completed Magnolia (1999)?", correct: "29", incorrect1: "32", incorrect2: "35", incorrect3: "37", incorrect4: "39", tags: "1999" },
    { question: "Who directed Blowup (1966)?", correct: "Michelangelo Antonioni", incorrect1: "Federico Fellini", incorrect2: "Bernardo Bertolucci", incorrect3: "François Truffaut", incorrect4: "Jean-Luc Godard", tags: "1966" },
    { question: "Which of his own movies did Michael Haneke do an American remake of in 2007?", correct: "Funny Games", incorrect1: "Das Schloß", incorrect2: "La pianiste", incorrect3: "Caché", incorrect4: "Le temps du loup", tags: "2007" },
    { question: "Gimme Shelter (1970) is a documentary about which group?", correct: "The Rolling Stones", incorrect1: "The Beatles", incorrect2: "The Who", incorrect3: "Led Zeppelin", incorrect4: "The Doors", tags: "1970" },
    { question: "Who plays the main character, Ethan Edwards, in The Searchers (1956)?", correct: "John Wayne", incorrect1: "Robert Mitchum", incorrect2: "Burt Lancaster", incorrect3: "Gary Cooper", incorrect4: "Kirk Douglas", tags: "1956" },
    { question: "Who played T.E. Lawrence in Lawrence of Arabia (1962)?", correct: "Peter O'Toole", incorrect1: "Alec Guinness", incorrect2: "Richard Burton", incorrect3: "Albert Finney", incorrect4: "Omar Sharif", tags: "1962" },
    { question: "Who directed The Bridge on the River Kwai (1957)?", correct: "David Lean", incorrect1: "Anthony Mann", incorrect2: "William Wyler", incorrect3: "Fred Zinnemann", incorrect4: "John Sturges", tags: "1957" },
    { question: "Who is Baby, in Bringing Up Baby (1938)?", correct: "A leopard", incorrect1: "A baby", incorrect2: "A dog", incorrect3: "A horse", incorrect4: "A bear", tags: "1938" },
    { question: "Who directed Se7en (1995)?", correct: "David Fincher", incorrect1: "Bryan Singer", incorrect2: "Jonathan Demme", incorrect3: "Ridley Scott", incorrect4: "Michael Mann", tags: "1995" },
    { question: "Who played Sheriff of Nottingham in Robin Hood: Prince of Thieves (1991)?", correct: "Alan Rickman", incorrect1: "Jeremy Irons", incorrect2: "Tim Curry", incorrect3: "Gary Oldman", incorrect4: "Malcolm McDowell", tags: "1991" },
    { question: "What are the first and second rule of Fight Club?", correct: "You don't talk about fight club.", incorrect1: "One fight at a time.", incorrect2: "If this is your first night at fight club, you have to fight.", incorrect3: "No weapons.", incorrect4: "Fight fair.", tags: "1999" },
    { question: "What's the color of the plane that chases Cary Grant in North By Northwest?", correct: "Red", incorrect1: "White", incorrect2: "Black", incorrect3: "Green", incorrect4: "Silver", tags: "1959" },
    { question: "Hitchcocks cameo in Life Boat is a bit different, why?", correct: "Hitch is an ad in a newspaper", incorrect1: "Hitch floats by as a dead body", incorrect2: "Hitch apperas in a dream", incorrect3: "Hitch is eaten by a shark", incorrect4: "Hitch makes no cameo in this film", tags: "1944" },
    { question: "Andy Dufresnes in The Shawshank Redemption decorates his cell with three posters, first Rita Hayworth then Marilyn Monroe but who is the third lady on the wall?", correct: "Raquel Welch", incorrect1: "Brigitte Bardot", incorrect2: "Jayne Mansfield", incorrect3: "Ursula Andress", incorrect4: "Ann-Margret", tags: "1994" },
    { question: "What's the name of the 1950s-themed restaurant in Pulp Fiction where Vincent Vega dances with Mia Wallace?", correct: "Jack Rabbit Slim's", incorrect1: "Mel's Drive-In", incorrect2: "Arnold's", incorrect3: "Galaxy Diner", incorrect4: "Rick's Café Américain", tags: "1994" },
    { question: "In The Dark Knight, during the hospital scene, The Joker is dressed as a nurse - what does it say on his name tag?", correct: "Matilda", incorrect1: "Julia", incorrect2: "Marie", incorrect3: "Mary", incorrect4: "Angela", tags: "2008" },
    { question: "Michael Douglas were involved in the making of One Flew Over the Cuckoo's Nest - in what way?", correct: "He produced it", incorrect1: "He was a stuntman", incorrect2: "He co-wrote the script", incorrect3: "He did the casting", incorrect4: "He was a location coordinator", tags: "1975" },
    { question: "What number does The Empire Strikes Back have in the Star Wars series?", correct: "5", incorrect1: "2", incorrect2: "4", incorrect3: "7", incorrect4: "3", tags: "1980" },
    { question: "Why is L. B. 'Jeff' Jefferies in Rear Window in an wheelchair?", correct: "Broken leg", incorrect1: "Amputated legs", incorrect2: "Spine injury", incorrect3: "Sprained ankle", incorrect4: "Dislocated knee", tags: "1954" },
    { question: "In Rear Window, what is James Stewart's character's occupation?", correct: "Photographer", incorrect1: "Writer", incorrect2: "Actor", incorrect3: "Landlord", incorrect4: "Police Officer", tags: "1954" },
    { question: "Three famous filmmakers came up with the story for C'era una volta il West (Once Upon a Time in the West), Sergio Leone, Dario Argento and...", correct: "Bernardo Bertolucci   ", incorrect1: "Federico Fellini", incorrect2: "Pier Paolo Pasolini", incorrect3: "Sergio Corbucci", incorrect4: "Luchino Visconti", tags: "1968" }, // Note: might need to trim whitespace from correct answer later
    { question: "Frank Booth is the villain in which film?", correct: "Blue Velvet", incorrect1: "Wild at Heart", incorrect2: "Manhunter", incorrect3: "Lost Highway", incorrect4: "Body Double", tags: "1986" },
    { question: "Roger 'Verbal' Kint is the villain in which film?", correct: "The Usual Suspects", incorrect1: "Se7en", incorrect2: "Primal Fear", incorrect3: "L.A. Confidential", incorrect4: "Reservoir Dogs", tags: "1994" },
    { question: "What is the occupation of the main character in Der letzte Mann (The Last Laugh) from 1924?", correct: "Doorman", incorrect1: "Magican", incorrect2: "Hitman", incorrect3: "Police", incorrect4: "Teacher", tags: "1924" },
    { question: "In Loverboy, if a female customer order extra of a specific ingredient on her pizza it means she is looking for some loving. Which ingredient?", correct: "Anchovies", incorrect1: "Salami", incorrect2: "Onion", incorrect3: "Cheese", incorrect4: "Bologna Sausage", tags: "1989" },
    { question: "In The Princess Bride, Inigo Montoya is searching for the murderer of his father. By which abnormality can the murderer be recognized?", correct: "Six fingers on one hand", incorrect1: "Three legs", incorrect2: "One eye", incorrect3: "Four arms", incorrect4: "No mouth", tags: "1987" },
    { question: "Shadowlands is a about a famous author and his relationship with the poet Joy Gresham. Which author?", correct: "C.S. Lewis", incorrect1: "Franz Kafka", incorrect2: "Ernest Hemingway", incorrect3: "Jack Kerouac", incorrect4: "Edgar Allan Poe", tags: "1993" },
    { question: "Who plays sci-fi author Chevalier in Gentlemen Broncos?", correct: "Jemaine Clement", incorrect1: "Bret McKenzie", incorrect2: "Rhys Darby", incorrect3: "Taika Waititi", incorrect4: "Will Forte", tags: "2009" },
    { question: "Who plays twin brothers in Leaves of Grass?", correct: "Edward Norton", incorrect1: "Nicolas Cage", incorrect2: "Jake Gyllenhaal", incorrect3: "Christian Bale", incorrect4: "Armie Hammer", tags: "2009" },
    // --- Added questions start here ---
    { question: "What item really ties the room together in The Big Lebowski?", correct: "A rug", incorrect1: "A bowling ball", incorrect2: "A painting", incorrect3: "A Persian cat", incorrect4: "A lava lamp", tags: "1998, Comedy, Quote" },
    { question: "What is the name of the malevolent AI computer in 2001: A Space Odyssey?", correct: "HAL 9000", incorrect1: "Skynet", incorrect2: "VIKI", incorrect3: "Mother", incorrect4: "GERTY", tags: "1968, sci-fi, Character" },
    { question: "Which classic film features the iconic line \"Here's looking at you, kid\"?", correct: "Casablanca", incorrect1: "Gone With the Wind", incorrect2: "The Maltese Falcon", incorrect3: "Citizen Kane", incorrect4: "To Have and Have Not", tags: "1942, Quote, Romance, Drama" },
    { question: "Who won an Oscar for playing Hannibal Lecter in The Silence of the Lambs?", correct: "Anthony Hopkins", incorrect1: "Brian Cox", incorrect2: "Mads Mikkelsen", incorrect3: "Jodie Foster", incorrect4: "Ted Levine", tags: "1991, Actor, Horror, Thriller, Oscar" },
    { question: "Who directed the meticulously symmetrical and quirky film The Grand Budapest Hotel?", correct: "Wes Anderson", incorrect1: "Quentin Tarantino", incorrect2: "Coen Brothers", incorrect3: "Paul Thomas Anderson", incorrect4: "Spike Jonze", tags: "2014, Director, Comedy, Drama" },
    { question: "What speed must the DeLorean reach to travel through time in Back to the Future?", correct: "88 mph", incorrect1: "99 mph", incorrect2: "80 mph", incorrect3: "100 mph", incorrect4: "1.21 gigawatts", tags: "1985, sci-fi, Comedy" },
    { question: "In Amélie, what unusual item does Amélie take from her father's garden to photograph around the world?", correct: "A garden gnome", incorrect1: "A pink flamingo", incorrect2: "A small gargoyle", incorrect3: "A porcelain doll", incorrect4: "A plastic frog", tags: "2001, Comedy, Romance, French" },
    { question: "Which film centers around a couple who undergo a procedure to erase memories of each other?", correct: "Eternal Sunshine of the Spotless Mind", incorrect1: "Memento", incorrect2: "Vanilla Sky", incorrect3: "Being John Malkovich", incorrect4: "Inception", tags: "2004, sci-fi, Romance, Drama, Title" },
    { question: "What is Travis Bickle's primary occupation in the film Taxi Driver?", correct: "Taxi Driver", incorrect1: "Vietnam Veteran", incorrect2: "Bodyguard", incorrect3: "Janitor", incorrect4: "Police Officer", tags: "1976, Character, Drama" },
    { question: "In Hayao Miyazaki's Spirited Away, what happens to Chihiro's parents when they eat the food at the abandoned theme park?", correct: "They turn into pigs", incorrect1: "They fall asleep", incorrect2: "They disappear", incorrect3: "They turn to stone", incorrect4: "They become giants", tags: "2001, Animation, Fantasy, Japanese" }
    // --- Start of 50 New Questions ---
    { question: "What phrase does Roy Batty famously utter near the end of Blade Runner?", correct: "Like tears in rain.", incorrect1: "Time to die.", incorrect2: "I've seen things you people wouldn't believe.", incorrect3: "All those moments will be lost.", incorrect4: "Fiery the angels fell.", tags: "1982, sci-fi, Quote" },
    { question: "Who directed the silent film classic Metropolis (1927)?", correct: "Fritz Lang", incorrect1: "F. W. Murnau", incorrect2: "Charlie Chaplin", incorrect3: "Sergei Eisenstein", incorrect4: "Buster Keaton", tags: "1927, Director, sci-fi, Silent Film" },
    { question: "In The Godfather, what type of fruit foreshadows death or danger?", correct: "Oranges", incorrect1: "Apples", incorrect2: "Grapes", incorrect3: "Lemons", incorrect4: "Pears", tags: "1972, Symbolism, Crime, Drama" },
    { question: "What is the name of the fictional news network in Anchorman: The Legend of Ron Burgundy?", correct: "KVWN Channel 4", incorrect1: "WNYX", incorrect2: "GNN", incorrect3: "Channel 9 News", incorrect4: "UBS", tags: "2004, Comedy, Fictional" },
    { question: "Which Quentin Tarantino film features a briefcase whose contents are never revealed?", correct: "Pulp Fiction", incorrect1: "Reservoir Dogs", incorrect2: "Jackie Brown", incorrect3: "Kill Bill: Vol. 1", incorrect4: "Inglourious Basterds", tags: "1994, Director, Mystery, Object" },
    { question: "What instrument does Andrew Neiman play obsessively in Whiplash?", correct: "Drums", incorrect1: "Trumpet", incorrect2: "Saxophone", incorrect3: "Piano", incorrect4: "Double Bass", tags: "2014, Music, Drama" },
    { question: "Who composed the iconic score for Psycho (1960)?", correct: "Bernard Herrmann", incorrect1: "John Williams", incorrect2: "Ennio Morricone", incorrect3: "Alfred Newman", incorrect4: "Max Steiner", tags: "1960, Music, Composer, Horror" },
    { question: "In Forrest Gump, what company does Forrest invest in that makes him rich?", correct: "Apple Computer", incorrect1: "Microsoft", incorrect2: "Coca-Cola", incorrect3: "Bubba Gump Shrimp Co.", incorrect4: "IBM", tags: "1994, Plot, Drama, Comedy" },
    { question: "What is the name of the Overlook Hotel's sinister head caretaker in The Shining novel (and mentioned in the film)?", correct: "Delbert Grady", incorrect1: "Lloyd the Bartender", incorrect2: "Stuart Ullman", incorrect3: "Horace Derwent", incorrect4: "Jack Torrance", tags: "1980, Horror, Character, Novel" },
    { question: "Which Wes Anderson film follows the adventures of three estranged brothers traveling across India by train?", correct: "The Darjeeling Limited", incorrect1: "The Royal Tenenbaums", incorrect2: "Moonrise Kingdom", incorrect3: "The Life Aquatic with Steve Zissou", incorrect4: "Fantastic Mr. Fox", tags: "2007, Director, Comedy, Drama" },
    { question: "What power source does the DeLorean time machine require in Back to the Future?", correct: "Plutonium (initially) / 1.21 Gigawatts", incorrect1: "Gasoline", incorrect2: "Solar Power", incorrect3: "Uranium", incorrect4: "A Fusion Reactor", tags: "1985, sci-fi, Object" },
    { question: "In 'This Is Spinal Tap', what is the maximum volume setting on Nigel Tufnel's amplifier?", correct: "11", incorrect1: "10", incorrect2: "12", incorrect3: "Max", incorrect4: "Loud", tags: "1984, Comedy, Mockumentary, Quote" },
    { question: "Who played the title character in the original RoboCop (1987)?", correct: "Peter Weller", incorrect1: "Kurtwood Smith", incorrect2: "Ronny Cox", incorrect3: "Arnold Schwarzenegger", incorrect4: "Sylvester Stallone", tags: "1987, Actor, sci-fi, Action" },
    { question: "What is the name of the fictional African nation ruled by King T'Challa in Black Panther?", correct: "Wakanda", incorrect1: "Zamunda", incorrect2: "Genovia", incorrect3: "Latveria", incorrect4: "Sokovia", tags: "2018, Location, Superhero, Fictional" },
    { question: "Which Akira Kurosawa film was famously remade as the western The Magnificent Seven?", correct: "Seven Samurai", incorrect1: "Yojimbo", incorrect2: "Rashomon", incorrect3: "Ikiru", incorrect4: "The Hidden Fortress", tags: "1954, Director, Remake, Japanese, Action" },
    { question: "In the movie Elf, what is the first rule of The Code of Elves?", correct: "Treat every day like Christmas", incorrect1: "There's room for everyone on the nice list", incorrect2: "The best way to spread Christmas Cheer is singing loud for all to hear", incorrect3: "Always wear pointy shoes", incorrect4: "Eat spaghetti with syrup", tags: "2003, Comedy, Christmas, Quote" },
    { question: "What object represents Rosebud in Citizen Kane?", correct: "A sled", incorrect1: "A snow globe", incorrect2: "A locket", incorrect3: "A diary", incorrect4: "A portrait", tags: "1941, Object, Mystery, Drama" },
    { question: "Who directed the sci-fi horror classic Alien (1979)?", correct: "Ridley Scott", incorrect1: "James Cameron", incorrect2: "John Carpenter", incorrect3: "David Cronenberg", incorrect4: "George Lucas", tags: "1979, Director, sci-fi, Horror" },
    { question: "What song do Rick and Ilsa famously associate with their time in Paris in Casablanca?", correct: "As Time Goes By", incorrect1: "La Vie en Rose", incorrect2: "Moonlight Serenade", incorrect3: "Cheek to Cheek", incorrect4: "The Way You Look Tonight", tags: "1942, Music, Romance, Drama" },
    { question: "In Donnie Darko, what does the mysterious figure Frank wear?", correct: "A rabbit costume", incorrect1: "A wolf costume", incorrect2: "A skeleton costume", incorrect3: "A clown mask", incorrect4: "A bird mask", tags: "2001, Character, Cult Classic, sci-fi" },
    { question: "What kind of creature is Toothless in How to Train Your Dragon?", correct: "Night Fury", incorrect1: "Deadly Nadder", incorrect2: "Gronckle", incorrect3: "Monstrous Nightmare", incorrect4: "Terrible Terror", tags: "2010, Animation, Fantasy, Character" },
    { question: "Who played the iconic role of Colonel Kurtz in Apocalypse Now?", correct: "Marlon Brando", incorrect1: "Robert Duvall", incorrect2: "Martin Sheen", incorrect3: "Dennis Hopper", incorrect4: "Harrison Ford", tags: "1979, Actor, War, Drama" },
    { question: "What is the name of the pub the characters try to reach during the pub crawl in The World's End?", correct: "The World's End", incorrect1: "The Old Familiar", incorrect2: "The Winchester", incorrect3: "The Famous Cock", incorrect4: "The King's Head", tags: "2013, Comedy, sci-fi, Location" },
    { question: "Which David Lynch film features a man finding a severed human ear in a field?", correct: "Blue Velvet", incorrect1: "Mulholland Drive", incorrect2: "Lost Highway", incorrect3: "Eraserhead", incorrect4: "Twin Peaks: Fire Walk with Me", tags: "1986, Director, Mystery, Thriller" },
    { question: "What type of animal is Rocket in Guardians of the Galaxy?", correct: "Genetically engineered Raccoon", incorrect1: "Red Panda", incorrect2: "Badger", incorrect3: "Fox", incorrect4: "Space Hamster", tags: "2014, Character, Superhero, sci-fi" },
    { question: "In The Matrix, what color pill does Neo take?", correct: "Red", incorrect1: "Blue", incorrect2: "Green", incorrect3: "Yellow", incorrect4: "Purple", tags: "1999, sci-fi, Action, Object" },
    { question: "Which Stanley Kubrick film features the memorable line ""Here's Johnny!""?", correct: "The Shining", incorrect1: "A Clockwork Orange", incorrect2: "2001: A Space Odyssey", incorrect3: "Dr. Strangelove", incorrect4: "Full Metal Jacket", tags: "1980, Quote, Horror, Director" },
    { question: "What is the name of the female gremlin in Gremlins 2: The New Batch?", correct: "Greta", incorrect1: "Stripe", incorrect2: "Gizmo", incorrect3: "Mohawk", incorrect4: "Daffy", tags: "1990, Character, Horror, Comedy" },
    { question: "Which actor portrayed James Bond in On Her Majesty's Secret Service?", correct: "George Lazenby", incorrect1: "Sean Connery", incorrect2: "Roger Moore", incorrect3: "Timothy Dalton", incorrect4: "Pierce Brosnan", tags: "1969, Actor, Action, James Bond" },
    { question: "What sport is the focus of the film Million Dollar Baby?", correct: "Boxing", incorrect1: "Tennis", incorrect2: "Figure Skating", incorrect3: "Basketball", incorrect4: "Swimming", tags: "2004, Sport, Drama" },
    { question: "In Pan's Labyrinth, what is the name of the terrifying creature with eyes in its hands?", correct: "The Pale Man", incorrect1: "The Faun", incorrect2: "The Toad", incorrect3: "Captain Vidal", incorrect4: "The Mandrake Root", tags: "2006, Fantasy, Horror, Character, Spanish" },
    { question: "What city serves as the primary setting for Ferris Bueller's Day Off?", correct: "Chicago", incorrect1: "New York City", incorrect2: "Los Angeles", incorrect3: "Detroit", incorrect4: "Boston", tags: "1986, Location, Comedy" },
    { question: "Who won the Academy Award for Best Director for Parasite?", correct: "Bong Joon-ho", incorrect1: "Quentin Tarantino", incorrect2: "Sam Mendes", incorrect3: "Todd Phillips", incorrect4: "Martin Scorsese", tags: "2019, Oscar, Director, South Korean" },
    { question: "What is the name of the vampire played by Tom Cruise in Interview with the Vampire?", correct: "Lestat de Lioncourt", incorrect1: "Louis de Pointe du Lac", incorrect2: "Armand", incorrect3: "Santiago", incorrect4: "Claudia", tags: "1994, Character, Horror, Fantasy" },
    { question: "Which movie features the line ""Get your stinking paws off me, you damned dirty ape!""?", correct: "Planet of the Apes (1968)", incorrect1: "King Kong (1933)", incorrect2: "2001: A Space Odyssey", incorrect3: "Beneath the Planet of the Apes", incorrect4: "Conquest of the Planet of the Apes", tags: "1968, Quote, sci-fi" },
    { question: "What job does the main character hold in the film Office Space?", correct: "Software Engineer / Programmer", incorrect1: "Accountant", incorrect2: "Marketing Manager", incorrect3: "Human Resources", incorrect4: "Restaurant Waiter", tags: "1999, Comedy, Character" },
    { question: "Who directed the classic musical Singin' in the Rain?", correct: "Stanley Donen & Gene Kelly", incorrect1: "Vincente Minnelli", incorrect2: "Busby Berkeley", incorrect3: "Fred Astaire", incorrect4: "Michael Curtiz", tags: "1952, Director, Musical, Comedy" },
    { question: "In The Lord of the Rings, what is the name of Gandalf's horse?", correct: "Shadowfax", incorrect1: "Brego", incorrect2: "Bill the Pony", incorrect3: "Asfaloth", incorrect4: "Snowmane", tags: "Fantasy, Character, Animal" },
    { question: "What does WALL-E stand for in the Pixar film?", correct: "Waste Allocation Load Lifter: Earth-Class", incorrect1: "Walking Apparatus Lifting Luggage Everywhere", incorrect2: "World Asset Location & Logistics Entity", incorrect3: "Wobbly Anthropomorphic Life-Like Explorer", incorrect4: "Widget Assembly Labor Link: Economy-Grade", tags: "2008, Animation, sci-fi, Acronym" },
    { question: "Which film is known for popularizing the 'bullet time' visual effect?", correct: "The Matrix", incorrect1: "Blade", incorrect2: "Mission: Impossible", incorrect3: "Face/Off", incorrect4: "Terminator 2: Judgment Day", tags: "1999, Action, sci-fi, Visual Effects" },
    { question: "What type of business do the characters run in Clerks?", correct: "Convenience Store & Video Rental Store", incorrect1: "Gas Station", incorrect2: "Fast Food Restaurant", incorrect3: "Record Store", incorrect4: "Laundromat", tags: "1994, Comedy, Location" },
    { question: "Who plays the terrifying Anton Chigurh in No Country for Old Men?", correct: "Javier Bardem", incorrect1: "Josh Brolin", incorrect2: "Tommy Lee Jones", incorrect3: "Woody Harrelson", incorrect4: "Benicio Del Toro", tags: "2007, Actor, Villain, Thriller" },
    { question: "What iconic vehicle does Mad Max drive in the original Mad Max (1979) and The Road Warrior?", correct: "V8 Interceptor (Pursuit Special)", incorrect1: "War Rig", incorrect2: "Gigahorse", incorrect3: "Nux Car", incorrect4: "Doof Wagon", tags: "1979, Action, sci-fi, Vehicle" },
    { question: "In Spirited Away, what is Haku's true form?", correct: "A river spirit (dragon)", incorrect1: "A wolf", incorrect2: "A boy", incorrect3: "A sorcerer", incorrect4: "A bathhouse worker", tags: "2001, Animation, Fantasy, Character, Japanese" },
    { question: "What is the name of the killer doll in the Child's Play franchise?", correct: "Chucky", incorrect1: "Annabelle", incorrect2: "Billy the Puppet", incorrect3: "Brahms", incorrect4: "Slappy", tags: "Horror, Character, Villain" },
    { question: "Which Alfred Hitchcock film famously features a scene in a cornfield with a crop-dusting plane?", correct: "North by Northwest", incorrect1: "The Birds", incorrect2: "Vertigo", incorrect3: "Psycho", incorrect4: "Rear Window", tags: "1959, Director, Thriller, Scene" },
    { question: "What board game is played with Death in Ingmar Bergman's The Seventh Seal?", correct: "Chess", incorrect1: "Checkers", incorrect2: "Go", incorrect3: "Backgammon", incorrect4: "Cards", tags: "1957, Director, Fantasy, Drama, Swedish" },
    { question: "Who wrote the screenplay for Taxi Driver?", correct: "Paul Schrader", incorrect1: "Martin Scorsese", incorrect2: "Robert De Niro", incorrect3: "Francis Ford Coppola", incorrect4: "Mardik Martin", tags: "1976, Writer, Drama" },
    { question: "In the film 'Her', what is the name of the AI operating system voiced by Scarlett Johansson?", correct: "Samantha", incorrect1: "Alexa", incorrect2: "Siri", incorrect3: "Joi", incorrect4: "Cortana", tags: "2013, sci-fi, Romance, Character" },
    { question: "What object is used to signify entering different dream levels in Inception?", correct: "A totem (spinning top, loaded die, etc.)", incorrect1: "A briefcase", incorrect2: "A sedative machine", incorrect3: "A specific song", incorrect4: "A wristwatch", tags: "2010, sci-fi, Action, Object" }
    // --- End of 50 New Questions ---];


// --- Quiz Logic Starts Here ---

const setupContainer = document.getElementById('setup-container');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');

const questionCountSelect = document.getElementById('question-count');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const nextButton = document.getElementById('next-btn'); // Get reference to next button

const questionCounterElement = document.getElementById('question-counter');
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score-text');
const feedbackElement = document.getElementById('feedback'); // Get reference to feedback element

let shuffledQuestions, currentQuestionIndex, score, selectedQuestionCount;

// --- Event Listeners ---
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', () => {
    resultsContainer.classList.add('hidden');
    setupContainer.classList.remove('hidden');
});
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// --- Functions ---

function startGame() {
    setupContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    const countValue = questionCountSelect.value;
    selectedQuestionCount = countValue === 'all' ? allQuestions.length : parseInt(countValue);

    // Shuffle all questions and take the selected number
    shuffledQuestions = shuffleArray([...allQuestions]).slice(0, selectedQuestionCount);
    currentQuestionIndex = 0;
    score = 0;

    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function showQuestion(questionData) {
    // Update question counter
    questionCounterElement.innerText = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;

    // Display the question text
    questionElement.innerText = questionData.question;

    // Create and shuffle answers
    const answers = [
        { text: questionData.correct.trim(), correct: true }, // Trim potential whitespace
        { text: questionData.incorrect1, correct: false },
        { text: questionData.incorrect2, correct: false },
        { text: questionData.incorrect3, correct: false },
        { text: questionData.incorrect4, correct: false }
    ].filter(answer => answer.text && answer.text.trim() !== ""); // Filter out empty answers

    const shuffledAnswers = shuffleArray(answers);

    // Create buttons for each answer
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = true; // Mark the correct button
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hidden'); // Hide next button initially
    feedbackElement.innerText = ''; // Clear feedback
    feedbackElement.className = 'feedback'; // Reset feedback class
    // Clear previous answer buttons
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    // Disable all buttons after selection
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true; // Disable button
    });

    // Provide feedback and update score
    if (correct) {
        score++;
        feedbackElement.innerText = 'Correct!';
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.innerText = 'Wrong!';
        feedbackElement.classList.add('incorrect');
    }

    // Show the Next button or finish quiz
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        nextButton.classList.remove('hidden'); // Show next button
    } else {
        // If it's the last question, show results after a short delay
        setTimeout(showResults, 1000); // Wait 1 second before showing results
    }
}

function setStatusClass(element, isCorrect) {
    clearStatusClass(element);
    if (isCorrect) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function showResults() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreElement.innerText = `You scored ${score} out of ${shuffledQuestions.length}!`;
}

// Fisher-Yates (aka Knuth) Shuffle Algorithm
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}