/* FluentPath — course content: beginner vocabulary, grammar drills, extra grammar lessons.
   Extends window.FP_DATA (loaded after data.js). Word ids are derived from the English
   word ("w_good_morning"), so they stay stable when new words are added later. */
(() => {
  const D = window.FP_DATA;
  if (!D) return;

  // [level, topic, [[en, kk, example], ...]]
  const BASIC = [
    ["A1", "daily", [
      ["goodbye", "сау бол", "Goodbye, see you tomorrow."],
      ["good morning", "қайырлы таң", "Good morning, teacher!"],
      ["good night", "қайырлы түн", "Good night, sleep well."],
      ["sorry", "кешір, кешіріңіз", "Sorry, I am late."],
      ["yes", "иә", "Yes, I understand."],
      ["no", "жоқ", "No, thank you."],
      ["name", "есім, ат", "My name is Aruzhan."],
      ["welcome", "қош келдіңіз", "Welcome to Almaty!"],
      ["how are you", "қалайсыз", "Hello! How are you?"],
      ["nice to meet you", "танысқаныма қуаныштымын", "Nice to meet you, Dana."],
      ["see you", "көріскенше", "See you later!"],
      ["excuse me", "ғафу етіңіз", "Excuse me, where is the bus stop?"],
    ]],
    ["A1", "family", [
      ["mother", "ана", "My mother is a doctor."],
      ["father", "әке", "My father works in a bank."],
      ["sister", "әпке, сіңлі", "My sister is a student."],
      ["brother", "аға, іні", "My brother plays football."],
      ["son", "ұлы", "Their son is five years old."],
      ["daughter", "қызы", "Their daughter likes music."],
      ["child", "бала", "The child is sleeping."],
      ["parents", "ата-ана", "My parents live in Shymkent."],
      ["grandmother", "әже", "My grandmother makes tasty baursak."],
      ["grandfather", "ата", "My grandfather tells good stories."],
      ["husband", "күйеуі", "Her husband is a teacher."],
      ["wife", "әйелі, жұбайы", "His wife is an engineer."],
      ["baby", "сәби", "The baby is very small."],
      ["man", "ер адам", "The man is tall."],
      ["woman", "әйел", "The woman is reading a newspaper."],
      ["boy", "ер бала", "The boy is ten years old."],
      ["girl", "қыз", "The girl has long hair."],
      ["people", "адамдар", "Many people live here."],
    ]],
    ["A1", "food", [
      ["bread", "нан", "I buy bread every morning."],
      ["water", "су", "Can I have some water?"],
      ["milk", "сүт", "The child drinks milk."],
      ["tea", "шай", "Kazakh people love tea."],
      ["coffee", "кофе", "I drink coffee in the morning."],
      ["meat", "ет", "We eat meat for dinner."],
      ["apple", "алма", "Almaty is famous for apples."],
      ["rice", "күріш", "Plov is made with rice."],
      ["egg", "жұмыртқа", "I eat an egg for breakfast."],
      ["soup", "сорпа", "This soup is very hot."],
      ["sugar", "қант", "No sugar, please."],
      ["breakfast", "таңғы ас", "Breakfast is at eight."],
      ["lunch", "түскі ас", "Let's have lunch together."],
      ["dinner", "кешкі ас", "Dinner is ready."],
      ["eat", "жеу", "We eat at home."],
      ["drink", "ішу", "Drink more water."],
      ["hungry", "аш", "I am very hungry."],
      ["delicious", "дәмді", "The cake is delicious."],
      ["fruit", "жеміс", "Fruit is good for you."],
      ["vegetable", "көкөніс", "Eat a vegetable with every meal."],
    ]],
    ["A1", "home", [
      ["house", "үй", "Our house is near the park."],
      ["room", "бөлме", "My room is small."],
      ["kitchen", "ас үй", "Mum is in the kitchen."],
      ["door", "есік", "Please close the door."],
      ["window", "терезе", "Open the window, please."],
      ["bed", "төсек", "The bed is very comfortable."],
      ["table", "үстел", "The keys are on the table."],
      ["chair", "орындық", "Sit on this chair."],
      ["key", "кілт", "I can't find my key."],
      ["flat", "пәтер", "They live in a new flat."],
      ["bathroom", "жуынатын бөлме", "The bathroom is clean."],
      ["garden", "бақ", "There are flowers in the garden."],
      ["floor", "қабат", "We live on the fifth floor."],
      ["wall", "қабырға", "The wall is white."],
    ]],
    ["A1", "time", [
      ["day", "күн", "Have a nice day!"],
      ["week", "апта", "I study five days a week."],
      ["month", "ай", "My birthday is next month."],
      ["year", "жыл", "She is ten years old."],
      ["today", "бүгін", "Today is Monday."],
      ["tomorrow", "ертең", "See you tomorrow."],
      ["yesterday", "кеше", "I was busy yesterday."],
      ["morning", "таңертең", "I run every morning."],
      ["evening", "кеш", "We watch films in the evening."],
      ["night", "түн", "The city is beautiful at night."],
      ["hour", "сағат (уақыт)", "The lesson is one hour long."],
      ["minute", "минут", "Wait a minute, please."],
      ["time", "уақыт", "What time is it?"],
      ["now", "қазір", "I am busy now."],
      ["always", "әрқашан", "She always smiles."],
      ["never", "ешқашан", "I never eat fast food."],
      ["Monday", "дүйсенбі", "School starts on Monday."],
      ["weekend", "демалыс күндері", "What do you do at the weekend?"],
      ["birthday", "туған күн", "Happy birthday, Aigerim!"],
    ]],
    ["A1", "describe", [
      ["red", "қызыл", "She has a red bag."],
      ["blue", "көк", "The sky is blue."],
      ["green", "жасыл", "Green tea is healthy."],
      ["white", "ақ", "Snow is white."],
      ["black", "қара", "I have a black cat."],
      ["yellow", "сары", "The sun is yellow."],
      ["big", "үлкен", "Almaty is a big city."],
      ["small", "кішкентай", "This is a small room."],
      ["new", "жаңа", "I have a new phone."],
      ["old", "ескі", "This is an old building."],
      ["hot", "ыстық", "The tea is too hot."],
      ["cold", "суық", "It is cold in winter."],
      ["happy", "бақытты", "I am happy today."],
      ["beautiful", "әдемі", "Kazakhstan is a beautiful country."],
      ["good", "жақсы", "This is a good idea."],
      ["bad", "жаман", "The weather is bad today."],
      ["long", "ұзын", "She has long hair."],
      ["short", "қысқа", "This text is short."],
    ]],
    ["A1", "actions", [
      ["go", "бару", "I go to work by bus."],
      ["come", "келу", "Come here, please."],
      ["see", "көру", "I can see the mountains."],
      ["know", "білу", "I know the answer."],
      ["want", "қалау", "I want to learn English."],
      ["like", "ұнату", "I like reading books."],
      ["live", "тұру, өмір сүру", "We live in Astana."],
      ["read", "оқу (мәтін)", "I read every evening."],
      ["write", "жазу", "Write your name here."],
      ["speak", "сөйлеу", "Do you speak English?"],
      ["listen", "тыңдау", "Listen to the teacher."],
      ["sleep", "ұйықтау", "Babies sleep a lot."],
      ["open", "ашу", "Open your books, please."],
      ["close", "жабу", "Close the door, please."],
      ["buy", "сатып алу", "I want to buy a new bag."],
      ["help", "көмектесу", "Can you help me?"],
      ["give", "беру", "Give me the pen, please."],
      ["take", "алып кету", "Take an umbrella with you."],
      ["play", "ойнау", "Children play in the park."],
    ]],

    ["A2", "city", [
      ["street", "көше", "Our street is quiet."],
      ["shop", "дүкен", "The shop opens at nine."],
      ["market", "базар", "We buy fruit at the market."],
      ["bank", "банк", "The bank is closed today."],
      ["hospital", "аурухана", "Her mother works in a hospital."],
      ["pharmacy", "дәріхана", "Is there a pharmacy near here?"],
      ["bus", "автобус", "The bus is late again."],
      ["train", "пойыз", "We took the train to Astana."],
      ["taxi", "такси", "Let's take a taxi."],
      ["map", "карта", "Look at the map."],
      ["left", "сол жақ", "Turn left at the bank."],
      ["right", "оң жақ", "The café is on the right."],
      ["near", "жақын", "The school is near my house."],
      ["far", "алыс", "The airport is far from here."],
      ["park", "саябақ", "We walk in the park."],
      ["bridge", "көпір", "Cross the bridge and turn right."],
    ]],
    ["A2", "shopping", [
      ["money", "ақша", "I don't have much money."],
      ["price", "баға", "What is the price of this?"],
      ["cheap", "арзан", "This shirt is cheap."],
      ["expensive", "қымбат", "Taxis are expensive here."],
      ["pay", "төлеу", "Can I pay by card?"],
      ["sell", "сату", "They sell fresh bread."],
      ["clothes", "киім", "I need new clothes."],
      ["size", "өлшем", "What size do you need?"],
      ["shoes", "аяқ киім", "These shoes are comfortable."],
      ["bag", "сөмке", "My bag is very heavy."],
    ]],
    ["A2", "education", [
      ["lesson", "сабақ", "The lesson starts at nine."],
      ["homework", "үй тапсырмасы", "Did you do your homework?"],
      ["exam", "емтихан", "I have an exam tomorrow."],
      ["question", "сұрақ", "Can I ask a question?"],
      ["answer", "жауап", "Write the answer here."],
      ["class", "сынып", "Our class has twenty students."],
      ["university", "университет", "She studies at university."],
      ["notebook", "дәптер", "Write the new words in your notebook."],
      ["pen", "қалам", "Can I borrow your pen?"],
      ["learn", "үйрену", "We learn new words every day."],
      ["study", "оқу, дайындалу", "I study for the exam."],
      ["word", "сөз", "Learn ten new words."],
      ["mistake", "қате", "Everyone makes mistakes."],
      ["easy", "оңай", "This exercise is easy."],
      ["difficult", "қиын", "The exam was difficult."],
      ["remember", "есте сақтау", "I can't remember his name."],
      ["forget", "ұмыту", "Don't forget your homework."],
      ["understand", "түсіну", "I don't understand this word."],
    ]],
    ["A2", "work", [
      ["office", "кеңсе", "She works in an office."],
      ["boss", "бастық", "My boss is very kind."],
      ["salary", "жалақы", "The salary is good."],
      ["interview", "сұхбат", "I have a job interview today."],
      ["company", "компания", "He works for a big company."],
      ["busy", "бос емес", "I am busy on Monday."],
      ["start", "бастау", "We start work at nine."],
      ["finish", "аяқтау", "I finish work at six."],
    ]],
    ["A2", "health", [
      ["head", "бас", "My head hurts."],
      ["hand", "қол", "Raise your hand."],
      ["eye", "көз", "Close your eyes and relax."],
      ["heart", "жүрек", "Sport is good for your heart."],
      ["doctor", "дәрігер", "You should see a doctor."],
      ["medicine", "дәрі", "Take this medicine after meals."],
      ["ill", "науқас", "I feel ill today."],
      ["pain", "ауырсыну", "I have a pain in my back."],
      ["sport", "спорт", "Football is my favourite sport."],
      ["tired", "шаршаған", "I am tired after work."],
      ["rest", "демалу", "You need to rest."],
      ["body", "дене", "Exercise keeps your body strong."],
    ]],
    ["A2", "nature", [
      ["weather", "ауа райы", "The weather is nice today."],
      ["sun", "күн (аспандағы)", "The sun is shining."],
      ["rain", "жаңбыр", "Take an umbrella, it may rain."],
      ["snow", "қар", "There is a lot of snow in winter."],
      ["wind", "жел", "The wind is strong today."],
      ["sky", "аспан", "The sky is clear tonight."],
      ["mountain", "тау", "We climbed a mountain."],
      ["river", "өзен", "The river is very long."],
      ["lake", "көл", "Balkhash is a big lake."],
      ["tree", "ағаш", "There is a tree near my house."],
      ["flower", "гүл", "She gave me a flower."],
      ["winter", "қыс", "Winter in Astana is very cold."],
      ["summer", "жаз", "We swim in the summer."],
      ["spring", "көктем", "Flowers grow in spring."],
      ["autumn", "күз", "Leaves fall in autumn."],
      ["warm", "жылы", "It is warm today."],
      ["animal", "жануар", "The horse is a beautiful animal."],
      ["horse", "жылқы", "Horses are important in Kazakh culture."],
    ]],
    ["A2", "feelings", [
      ["sad", "мұңды", "Why are you sad?"],
      ["angry", "ашулы", "He is angry with me."],
      ["afraid", "қорыққан", "I am afraid of dogs."],
      ["kind", "мейірімді", "My teacher is very kind."],
      ["friendly", "достық пейілді", "People here are friendly."],
      ["polite", "сыпайы", "Always be polite."],
      ["calm", "сабырлы", "Stay calm during the exam."],
      ["worried", "алаңдаулы", "I am worried about the test."],
      ["proud", "мақтаныш сезімі бар", "My parents are proud of me."],
      ["funny", "күлкілі", "The film was very funny."],
      ["lazy", "жалқау", "Don't be lazy!"],
      ["smart", "ақылды", "She is a smart student."],
      ["love", "жақсы көру", "I love my family."],
      ["smile", "күлімсіреу", "Smile, it's a good day!"],
      ["feel", "сезіну", "How do you feel today?"],
    ]],
    ["A2", "hobby", [
      ["music", "музыка", "I listen to music every day."],
      ["film", "фильм", "Let's watch a film tonight."],
      ["game", "ойын", "This game is fun."],
      ["hobby", "хобби", "My hobby is drawing."],
      ["draw", "сурет салу", "Children like to draw."],
      ["dance", "билеу", "She loves to dance."],
      ["sing", "ән айту", "Can you sing this song?"],
      ["swim", "жүзу", "I swim twice a week."],
      ["holiday", "мереке, демалыс", "Nauryz is my favourite holiday."],
      ["party", "кеш, той", "We have a party on Friday."],
      ["photo", "фотосурет", "Take a photo of us!"],
      ["football", "футбол", "Boys play football after school."],
      ["dombra", "домбыра", "My grandfather plays the dombra."],
      ["museum", "мұражай", "We visited a museum in Astana."],
      ["cinema", "кинотеатр", "The cinema is near the mall."],
    ]],
  ];

  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const existing = new Set(D.vocab.map((w) => w.en.toLowerCase()));
  BASIC.forEach(([level, topic, words]) => {
    words.forEach(([en, kk, example]) => {
      if (existing.has(en.toLowerCase())) return;
      existing.add(en.toLowerCase());
      D.vocab.push({ id: `w_${slug(en)}`, en, kk, level, topic, example });
    });
  });

  const NEW_TOPICS = [
    { id: "family", label: "Family" },
    { id: "food", label: "Food" },
    { id: "home", label: "Home" },
    { id: "time", label: "Time" },
    { id: "describe", label: "Describing" },
    { id: "actions", label: "Actions" },
    { id: "city", label: "City" },
    { id: "shopping", label: "Shopping" },
    { id: "nature", label: "Nature" },
    { id: "feelings", label: "Feelings" },
    { id: "hobby", label: "Hobbies" },
  ];
  const known = new Set((D.topics || []).map((t) => t.id));
  NEW_TOPICS.forEach((t) => {
    if (!known.has(t.id)) D.topics.push(t);
  });

  /* Extra grammar lessons */
  const EXTRA_LESSONS = [
    {
      id: "g13",
      title: "To be: am / is / are",
      level: "A1",
      body: `
        <h2>To be: am / is / are</h2>
        <p><strong>Мағынасы:</strong> «болу». Қазақшада жиі айтылмайды: «Мен студентпін» = <em>I am a student</em>.</p>
        <p><strong>Формула:</strong> I <strong>am</strong> · He/She/It <strong>is</strong> · You/We/They <strong>are</strong></p>
        <ul>
          <li>I <em>am</em> from Kazakhstan.</li>
          <li>She <em>is</em> a doctor.</li>
          <li>We <em>are</em> friends.</li>
        </ul>
        <p><strong>Болымсыз:</strong> I'm not · He isn't · They aren't. <strong>Сұрақ:</strong> Are you ready? — Yes, I am.</p>
      `,
      practice: {
        q: "___ you a student?",
        options: ["Am", "Is", "Are", "Be"],
        answer: 2,
        explain: "you → are: Are you a student?",
      },
    },
    {
      id: "g14",
      title: "There is / There are",
      level: "A1",
      body: `
        <h2>There is / There are</h2>
        <p><strong>Мағынасы:</strong> «бар» — бір нәрсенің бір жерде бар екенін айту.</p>
        <p><strong>Формула:</strong> There <strong>is</strong> + жекеше · There <strong>are</strong> + көпше</p>
        <ul>
          <li>There <em>is</em> a park near my house.</li>
          <li>There <em>are</em> 30 students in our class.</li>
          <li>Is there a bank here? — Yes, there is.</li>
        </ul>
        <p><strong>Болымсыз:</strong> There isn't any milk. There aren't any chairs.</p>
      `,
      practice: {
        q: "There ___ three books on the table.",
        options: ["is", "are", "be", "am"],
        answer: 1,
        explain: "three books — көпше → there are.",
      },
    },
    {
      id: "g15",
      title: "Second & Third Conditional",
      level: "B2",
      body: `
        <h2>Second &amp; Third Conditional</h2>
        <p><strong>Second:</strong> қазіргі не болашақтағы шынайы емес жағдай. <em>If + Past Simple, would + V1</em></p>
        <ul>
          <li>If I <em>had</em> more time, I <em>would travel</em> more.</li>
          <li>If I <em>were</em> you, I <em>would apply</em> to this university.</li>
        </ul>
        <p><strong>Third:</strong> өткенде болмаған жағдай, өкініш. <em>If + Past Perfect, would have + V3</em></p>
        <ul>
          <li>If she <em>had studied</em>, she <em>would have passed</em>.</li>
        </ul>
        <p><strong>IELTS кеңесі:</strong> Writing Task 2-де гипотеза айтқанда second conditional грамматикалық әртүрлілікті көрсетеді.</p>
      `,
      practice: {
        q: "If I ___ rich, I would buy a house in Almaty.",
        options: ["am", "were", "will be", "have been"],
        answer: 1,
        explain: "Second conditional: If + Past Simple → If I were…",
      },
    },
    {
      id: "g16",
      title: "Relative clauses",
      level: "B1–B2",
      body: `
        <h2>Relative clauses</h2>
        <p><strong>Не үшін:</strong> екі сөйлемді біріктіріп, затты не адамды нақтылау.</p>
        <p><strong>who</strong> — адам · <strong>which</strong> — зат · <strong>that</strong> — екеуі де · <strong>where</strong> — орын · <strong>whose</strong> — кімнің</p>
        <ul>
          <li>The teacher <em>who</em> helped me is from Astana.</li>
          <li>The book <em>which</em> I bought is useful.</li>
          <li>This is the city <em>where</em> I was born.</li>
          <li>She is the student <em>whose</em> essay won.</li>
        </ul>
        <p><strong>Кеңес:</strong> академиялық жазуда ұзын, байланысты сөйлем құруға көмектеседі.</p>
      `,
      practice: {
        q: "The man ___ lives next door is a doctor.",
        options: ["who", "which", "where", "whose"],
        answer: 0,
        explain: "Адам туралы → who.",
      },
    },
    {
      id: "g17",
      title: "Reported speech",
      level: "B2",
      body: `
        <h2>Reported speech</h2>
        <p><strong>Не үшін:</strong> біреудің сөзін жанама түрде жеткізу. Шақ бір саты артқа жылжиды.</p>
        <ul>
          <li>"I am tired." → She said (that) she <em>was</em> tired.</li>
          <li>"I will call you." → He said he <em>would</em> call me.</li>
          <li>"I have finished." → She said she <em>had finished</em>.</li>
        </ul>
        <p><strong>Сұрақ:</strong> "Where do you live?" → He asked where I <em>lived</em>.</p>
        <p><strong>say vs tell:</strong> say (that)… · tell <em>someone</em> (that)…</p>
      `,
      practice: {
        q: "\"I like tea,\" she said. → She said she ___ tea.",
        options: ["likes", "liked", "has liked", "will like"],
        answer: 1,
        explain: "Present Simple → Past Simple: liked.",
      },
    },
    {
      id: "g18",
      title: "Gerund or infinitive",
      level: "B2",
      body: `
        <h2>Gerund (-ing) or infinitive (to + V1)</h2>
        <p>Кейбір етістіктерден кейін <strong>-ing</strong>, кейбірінен кейін <strong>to + V1</strong> келеді.</p>
        <p><strong>-ing:</strong> enjoy, avoid, finish, mind, suggest, consider</p>
        <p><strong>to + V1:</strong> want, decide, hope, plan, agree, refuse</p>
        <ul>
          <li>I enjoy <em>reading</em>.</li>
          <li>She decided <em>to study</em> abroad.</li>
        </ul>
        <p><strong>Ереже:</strong> предлогтан кейін әрқашан -ing: interested in <em>learning</em>.</p>
      `,
      practice: {
        q: "I enjoy ___ English films.",
        options: ["watch", "to watch", "watching", "watched"],
        answer: 2,
        explain: "enjoy + -ing → watching.",
      },
    },
  ];
  // A1 basics (to be, there is) come before Present Simple; the rest are appended.
  const lessonIds = new Set(D.lessons.map((l) => l.id));
  const front = [];
  EXTRA_LESSONS.forEach((l) => {
    if (lessonIds.has(l.id)) return;
    if (l.level === "A1") front.push(l);
    else D.lessons.push(l);
  });
  D.lessons = [...front, ...D.lessons];

  /* Drills for every grammar lesson. mcq: [question, options, answerIndex, explanation]
     build: Kazakh sentence → English sentence (tiles). */
  const mcq = (q, options, a, exp) => ({ type: "mcq", q, options, a, exp });
  const build = (kk, en) => ({ type: "build", kk, en });
  const DRILLS = {
    g13: [
      mcq("I ___ from Almaty.", ["am", "is", "are", "be"], 0, "I → am."),
      mcq("My brother ___ a teacher.", ["am", "is", "are", "be"], 1, "My brother = he → is."),
      mcq("They ___ at home now.", ["is", "am", "are", "be"], 2, "They → are."),
      mcq("She ___ not tired.", ["is", "are", "am", "do"], 0, "She is not (isn't) tired."),
      build("Біз доспыз.", "We are friends."),
      build("Мен студентпін.", "I am a student."),
    ],
    g14: [
      mcq("There ___ a cat in the garden.", ["is", "are", "am", "be"], 0, "a cat — жекеше → there is."),
      mcq("There ___ many people in the park.", ["is", "are", "am", "has"], 1, "many people — көпше → there are."),
      mcq("___ there a pharmacy near here?", ["Is", "Are", "Do", "Does"], 0, "Сұрақ: Is there…?"),
      mcq("There aren't ___ eggs in the fridge.", ["some", "any", "a", "many"], 1, "Болымсыз сөйлемде → any."),
      build("Менің үйімнің жанында саябақ бар.", "There is a park near my house."),
    ],
    g1: [
      mcq("She ___ coffee every morning.", ["drink", "drinks", "drinking", "is drink"], 1, "He/She/It + V1 + s → drinks."),
      mcq("___ you speak English?", ["Does", "Do", "Are", "Is"], 1, "you → Do…?"),
      mcq("He ___ like fish.", ["don't", "doesn't", "isn't", "not"], 1, "He + doesn't + V1."),
      mcq("We usually ___ dinner at seven.", ["have", "has", "having", "are have"], 0, "We + V1 → have."),
      build("Мен күнде ағылшын тілін оқимын.", "I study English every day."),
      build("Ол Алматыда жұмыс істейді.", "She works in Almaty."),
    ],
    g2: [
      mcq("Look! It ___.", ["rains", "is raining", "rain", "raining"], 1, "Look! — дәл қазір → is raining."),
      mcq("I ___ to music now.", ["listen", "am listening", "listening", "listens"], 1, "now → am + V-ing."),
      mcq("They ___ football at the moment.", ["are playing", "is playing", "play", "plays"], 0, "They + are + V-ing."),
      mcq("What ___ you doing?", ["is", "are", "do", "does"], 1, "you → are … doing?"),
      build("Мен қазір кітап оқып жатырмын.", "I am reading a book now."),
    ],
    g3: [
      mcq("We ___ to Astana last week.", ["go", "went", "gone", "goes"], 1, "go — бұрыс етістік: go → went."),
      mcq("She ___ the film yesterday.", ["watch", "watched", "watches", "watching"], 1, "yesterday → watched."),
      mcq("___ you call me yesterday?", ["Do", "Did", "Does", "Were"], 1, "Өткен шақ сұрағы → Did…?"),
      mcq("I didn't ___ the answer.", ["knew", "know", "known", "knows"], 1, "didn't + V1 → know."),
      build("Кеше мен досыма хат жаздым.", "Yesterday I wrote a letter to my friend."),
    ],
    g4: [
      mcq("Look at the clouds! It ___ rain.", ["will", "is going to", "goes to", "going"], 1, "Белгісі көрініп тұр → going to."),
      mcq("I think she ___ pass the exam.", ["will", "is going", "going", "wills"], 0, "Болжам, пікір → will."),
      mcq("We bought tickets. We ___ visit Turkistan next week.", ["are going to", "will to", "going", "goes to"], 0, "Алдын ала жоспар → going to."),
      mcq("The phone is ringing. — I ___ answer it!", ["will", "am going to", "answer", "answered"], 0, "Сол сәттегі шешім → will."),
      build("Мен ертең саған қоңырау шаламын.", "I will call you tomorrow."),
    ],
    g5: [
      mcq("I have ___ apple.", ["a", "an", "the", "—"], 1, "Дауысты дыбыс алдында → an."),
      mcq("___ sun is very bright today.", ["A", "An", "The", "—"], 2, "Жалғыз нәрсе → the."),
      mcq("She is ___ engineer.", ["a", "an", "the", "—"], 1, "engineer — дауысты дыбыс → an."),
      mcq("I like ___ music.", ["a", "an", "the", "—"], 3, "Жалпы мағынада артикль қойылмайды."),
      mcq("Can you close ___ door, please?", ["a", "an", "the", "—"], 2, "Нақты есік → the."),
    ],
    g6: [
      mcq("Astana is ___ than Almaty in winter.", ["cold", "colder", "coldest", "more cold"], 1, "Қысқа сын есім + -er → colder."),
      mcq("This is the ___ book I have ever read.", ["good", "better", "best", "most good"], 2, "good → better → the best."),
      mcq("English is ___ than Chinese for me.", ["easy", "easier", "easiest", "more easy"], 1, "easy → easier."),
      mcq("Khan Tengri is one of the ___ mountains in Kazakhstan.", ["high", "higher", "highest", "most high"], 2, "one of the + -est."),
      build("Менің інім менен ұзын.", "My brother is taller than me."),
    ],
    g7: [
      mcq("I have ___ this film twice.", ["see", "saw", "seen", "seeing"], 2, "have + V3 → seen."),
      mcq("She ___ lived here since 2020.", ["have", "has", "is", "did"], 1, "She → has + V3."),
      mcq("Have you ever ___ to London?", ["be", "been", "was", "being"], 1, "Have you ever been…?"),
      mcq("We haven't finished ___.", ["yet", "already", "ago", "since"], 0, "Болымсыз сөйлемнің соңында → yet."),
      build("Мен үй тапсырмасын орындап қойдым.", "I have already done my homework."),
    ],
    g8: [
      mcq("If you heat ice, it ___.", ["melt", "melts", "will melting", "melted"], 1, "Zero conditional — факт → Present Simple."),
      mcq("If it rains, we ___ at home.", ["stay", "will stay", "stayed", "staying"], 1, "First conditional → will + V1."),
      mcq("If she ___ hard, she will pass.", ["study", "studies", "will study", "studied"], 1, "If бөлігінде will қолданылмайды."),
      mcq("I will call you if I ___ time.", ["have", "will have", "had", "having"], 0, "if + Present Simple."),
      build("Егер уақытым болса, мен саған көмектесемін.", "If I have time, I will help you."),
    ],
    g9: [
      mcq("You ___ smoke here. It's not allowed.", ["mustn't", "don't have to", "can", "should"], 0, "Тыйым → mustn't."),
      mcq("___ I open the window?", ["Can", "Must", "Should to", "Have"], 0, "Рұқсат сұрау → Can I…?"),
      mcq("You look tired. You ___ go to bed.", ["should", "must to", "can't", "mustn't"], 0, "Кеңес → should."),
      mcq("Tomorrow is Sunday, so I ___ get up early.", ["don't have to", "mustn't", "can't", "shouldn't to"], 0, "Міндетті емес → don't have to."),
      build("Сен көбірек су ішуің керек.", "You should drink more water."),
    ],
    g10: [
      mcq("English ___ all over the world.", ["speaks", "is spoken", "spoke", "is speaking"], 1, "Ырықсыз етіс: is + V3."),
      mcq("The bridge ___ in 2015.", ["built", "was built", "is build", "has build"], 1, "Өткен шақ: was + V3."),
      mcq("These cars ___ in Kazakhstan.", ["are made", "is made", "make", "made"], 0, "Көпше: are + V3."),
      mcq("The letter was written ___ my grandfather.", ["by", "from", "with", "of"], 0, "Іс-әрекетті жасаушы → by."),
      build("Бұл үй 1990 жылы салынған.", "This house was built in 1990."),
    ],
    g11: [
      mcq("I was tired. ___, I finished my homework.", ["However", "Because", "So", "And"], 0, "Қарама-қайшылық → However."),
      mcq("She stayed at home ___ she was ill.", ["because", "although", "however", "but"], 0, "Себеп → because."),
      mcq("___ it was raining, we went for a walk.", ["Although", "Because", "So", "Therefore"], 0, "Although + сөйлем = «…болса да»."),
      mcq("The test was easy. ___, everyone passed.", ["Therefore", "However", "Although", "Despite"], 0, "Нәтиже → Therefore."),
      mcq("___ the bad weather, the flight was on time.", ["Despite", "Although", "However", "Because"], 0, "Despite + зат есім."),
    ],
    g12: [
      mcq("Please ___ the music. It's too loud.", ["turn down", "turn up", "turn on", "give up"], 0, "turn down = дыбысын азайту."),
      mcq("I need to ___ this word in the dictionary.", ["look up", "look after", "give up", "get up"], 0, "look up = сөздіктен іздеу."),
      mcq("What time do you usually ___?", ["get up", "give up", "look up", "turn off"], 0, "get up = төсектен тұру."),
      mcq("Who will ___ your cat when you travel?", ["look after", "look up", "find out", "turn down"], 0, "look after = күту, қарау."),
      mcq("I want to ___ more about this course.", ["find out", "give up", "turn off", "get up"], 0, "find out = білу, анықтау."),
    ],
    g15: [
      mcq("If I ___ you, I would study every day.", ["am", "were", "will be", "be"], 1, "If I were you — кеңес берудің тұрақты формасы."),
      mcq("If they had left earlier, they ___ the train.", ["would catch", "would have caught", "will catch", "caught"], 1, "Third conditional → would have + V3."),
      mcq("What would you do if you ___ the lottery?", ["win", "won", "will win", "have won"], 1, "Second conditional: if + Past Simple."),
      mcq("If he hadn't been ill, he ___ to the party.", ["would come", "would have come", "will come", "came"], 1, "Өткен жағдай → would have come."),
      build("Егер уақытым көп болса, мен көбірек оқыр едім.", "If I had more time, I would read more."),
    ],
    g16: [
      mcq("This is the house ___ I grew up.", ["where", "which", "who", "whose"], 0, "Орын → where."),
      mcq("The phone ___ I bought last week is broken.", ["which", "who", "where", "whose"], 0, "Зат → which."),
      mcq("I have a friend ___ father is a pilot.", ["whose", "who", "which", "where"], 0, "Кімнің әкесі → whose."),
      mcq("People ___ exercise regularly live longer.", ["who", "which", "where", "whose"], 0, "Адамдар → who."),
      build("Маған көмектескен мұғалім Астанадан.", "The teacher who helped me is from Astana."),
    ],
    g17: [
      mcq("\"I am busy,\" he said. → He said he ___ busy.", ["is", "was", "were", "has been"], 1, "am → was."),
      mcq("\"We will help you.\" → They said they ___ help me.", ["will", "would", "can", "are"], 1, "will → would."),
      mcq("\"I have lost my key.\" → She said she ___ her key.", ["has lost", "had lost", "lost", "loses"], 1, "have lost → had lost."),
      mcq("\"Do you like music?\" → He asked if I ___ music.", ["like", "liked", "do like", "am liking"], 1, "Сұрақ та бір саты артқа: liked."),
      mcq("She ___ me that the exam was difficult.", ["told", "said", "spoke", "talked"], 0, "tell + адам (told me); say + that."),
    ],
    g18: [
      mcq("She decided ___ abroad.", ["study", "to study", "studying", "studied"], 1, "decide + to + V1."),
      mcq("Would you mind ___ the window?", ["open", "to open", "opening", "opened"], 2, "mind + -ing."),
      mcq("We hope ___ you soon.", ["see", "to see", "seeing", "seen"], 1, "hope + to + V1."),
      mcq("He is interested in ___ new languages.", ["learn", "to learn", "learning", "learned"], 2, "Предлогтан кейін → -ing."),
      mcq("Try to avoid ___ the same words in your essay.", ["repeat", "to repeat", "repeating", "repeated"], 2, "avoid + -ing."),
    ],
  };
  D.lessons.forEach((l) => {
    if (DRILLS[l.id]) l.drills = DRILLS[l.id];
  });

  // Keep grammar lessons in level order (A1 → B2) for the grammar page and the path.
  const RANK = { A1: 1, "A1–A2": 1.5, A2: 2, "A2–B1": 2.5, B1: 3, "B1–B2": 3.5, B2: 4 };
  D.lessons = D.lessons
    .map((l, i) => ({ l, i }))
    .sort((a, b) => (RANK[a.l.level] || 9) - (RANK[b.l.level] || 9) || a.i - b.i)
    .map((x) => x.l);
})();
