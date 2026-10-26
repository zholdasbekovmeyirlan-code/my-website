/* FluentPath — more content for beginners and B1: core words, new grammar lessons with drills,
   A1 listening tracks and beginner writing / speaking tasks.
   Extends window.FP_DATA (loaded after content-extra.js). */
(() => {
  const D = window.FP_DATA;
  if (!D) return;

  /* ---------- Words: [level, topic, [[en, kk, example], ...]] ---------- */
  const WORDS = [
    ["A1", "actions", [
      ["be", "болу", "I want to be a doctor."],
      ["have", "бар болу, иелену", "I have two brothers."],
      ["do", "істеу, жасау", "I do my homework in the evening."],
      ["get", "алу", "Can I get a glass of water?"],
      ["make", "жасау, дайындау", "My mother makes tea every morning."],
      ["look", "қарау", "Look at this picture!"],
      ["watch", "көру, тамашалау", "We watch TV in the evening."],
      ["hear", "есту", "I can hear the music."],
      ["say", "айту", "Say hello to your sister."],
      ["tell", "айтып беру", "Tell me about your family."],
      ["talk", "сөйлесу", "We talk on the phone every day."],
      ["ask", "сұрау", "Can I ask a question?"],
      ["think", "ойлау", "I think it is a good idea."],
      ["need", "керек болу, қажет ету", "I need a new pen."],
      ["run", "жүгіру", "He runs in the park every morning."],
      ["walk", "жаяу жүру", "I walk to school."],
      ["sit", "отыру", "Please sit here."],
      ["stand", "тұру", "We stand at the bus stop."],
      ["wait", "күту", "Please wait a minute."],
      ["meet", "кездесу", "Let's meet at six."],
      ["call", "қоңырау шалу", "Call me tomorrow."],
      ["find", "табу", "I can't find my keys."],
      ["lose", "жоғалту", "Don't lose your ticket."],
      ["leave", "кету", "The bus leaves at nine."],
      ["stay", "қалу", "I stay at home on Sunday."],
      ["bring", "әкелу", "Bring your book, please."],
      ["carry", "алып жүру, көтеру", "He carries a big bag."],
      ["wear", "кию", "She wears a red dress."],
      ["cook", "тамақ пісіру", "My father cooks plov on Sundays."],
      ["wash", "жуу", "Wash your hands before dinner."],
      ["clean", "тазалау; таза", "We clean the house on Saturday."],
      ["drive", "көлік жүргізу", "My uncle drives a taxi."],
      ["fly", "ұшу", "Birds fly south in autumn."],
      ["teach", "үйрету, сабақ беру", "She teaches English at school."],
      ["begin", "бастау, басталу", "The lesson begins at nine."],
      ["try", "тырысу, байқап көру", "Try this cake!"],
      ["use", "пайдалану, қолдану", "Can I use your phone?"],
      ["show", "көрсету", "Show me your photo."],
      ["send", "жіберу", "Send me a message."],
    ]],
    ["A1", "describe", [
      ["young", "жас", "My sister is young."],
      ["tall", "бойы ұзын", "My brother is very tall."],
      ["fast", "жылдам, тез", "This car is very fast."],
      ["slow", "баяу", "The bus is slow today."],
      ["dirty", "кір, лас", "My shoes are dirty."],
      ["wrong", "қате, дұрыс емес", "Sorry, this is the wrong answer."],
      ["same", "бірдей", "We are in the same class."],
      ["little", "кішкентай; аз", "I have a little dog."],
      ["many", "көп (саналатын)", "There are many people here."],
      ["much", "көп (саналмайтын)", "I don't have much time."],
      ["few", "аз, санаулы", "There are few shops in our village."],
      ["some", "біраз, кейбір", "I want some water."],
      ["all", "бәрі, барлық", "All my friends are students."],
      ["every", "әр, әрбір", "I read every day."],
    ]],
    ["A1", "time", [
      ["early", "ерте", "I get up early."],
      ["late", "кеш", "He comes home late."],
      ["often", "жиі", "I often drink tea."],
      ["sometimes", "кейде", "Sometimes I walk to work."],
      ["usually", "әдетте", "I usually have breakfast at eight."],
      ["first", "бірінші", "This is my first lesson."],
      ["last", "соңғы", "December is the last month of the year."],
      ["next", "келесі", "See you next week!"],
      ["Sunday", "жексенбі", "We visit grandmother on Sunday."],
      ["January", "қаңтар", "It is very cold in January."],
      ["here", "мұнда, осында", "Come here, please."],
      ["there", "сонда, ол жерде", "My school is over there."],
    ]],
    ["A1", "numbers", [
      ["one", "бір", "I have one sister."],
      ["two", "екі", "Two coffees, please."],
      ["three", "үш", "We have three cats."],
      ["four", "төрт", "There are four rooms in our flat."],
      ["five", "бес", "My son is five."],
      ["six", "алты", "I get up at six."],
      ["seven", "жеті", "There are seven days in a week."],
      ["eight", "сегіз", "The shop opens at eight."],
      ["nine", "тоғыз", "My little brother is nine."],
      ["ten", "он", "I know ten English words!"],
      ["twenty", "жиырма", "I am twenty years old."],
      ["hundred", "жүз", "This book has a hundred pages."],
      ["thousand", "мың", "It costs two thousand tenge."],
      ["number", "сан, нөмір", "What is your phone number?"],
    ]],
    ["A1", "animals", [
      ["dog", "ит", "Our dog is very friendly."],
      ["cat", "мысық", "The cat is sleeping on the sofa."],
      ["bird", "құс", "A bird is singing in the tree."],
      ["cow", "сиыр", "My grandmother has two cows."],
      ["sheep", "қой", "There are many sheep in the village."],
      ["camel", "түйе", "Camels can live in the desert."],
      ["fish", "балық", "We eat fish on Fridays."],
      ["chicken", "тауық", "I like chicken soup."],
      ["mouse", "тышқан", "The cat sees a mouse."],
      ["wolf", "қасқыр", "The wolf lives in the forest."],
    ]],
    ["A1", "clothes", [
      ["shirt", "жейде", "He wears a white shirt."],
      ["hat", "бас киім, қалпақ", "Put on your hat, it's cold."],
      ["dress", "көйлек", "She has a beautiful dress."],
      ["jacket", "күрте", "Take your jacket."],
      ["coat", "пальто", "I wear a warm coat in winter."],
      ["trousers", "шалбар", "These trousers are too long."],
      ["skirt", "белдемше, юбка", "Her skirt is blue."],
      ["socks", "шұлық", "I need new socks."],
      ["T-shirt", "футболка", "I wear a T-shirt in summer."],
      ["boots", "етік", "My boots are wet."],
    ]],
    ["A1", "home", [
      ["phone", "телефон", "My phone is on the table."],
      ["computer", "компьютер", "I do my homework on the computer."],
      ["sofa", "диван", "We sit on the sofa and watch TV."],
      ["TV", "теледидар", "There is a TV in the living room."],
      ["lamp", "шам", "Turn on the lamp, please."],
      ["picture", "сурет", "There is a picture on the wall."],
      ["cup", "шыныаяқ, кесе", "A cup of tea, please."],
      ["plate", "тәрелке", "Put the plate on the table."],
    ]],
    ["A1", "food", [
      ["food", "тамақ, ас", "Kazakh food is delicious."],
      ["cheese", "ірімшік", "I like bread with cheese."],
      ["potato", "картоп", "We need potatoes for the soup."],
      ["salt", "тұз", "Pass me the salt, please."],
      ["juice", "шырын", "I drink orange juice."],
      ["cake", "торт", "Mum makes a cake for my birthday."],
    ]],
    ["A2", "city", [
      ["car", "көлік, машина", "My father has a new car."],
      ["country", "ел, мемлекет", "Kazakhstan is a big country."],
      ["village", "ауыл", "My grandparents live in a village."],
    ]],
    ["A2", "health", [
      ["face", "бет", "Wash your face with cold water."],
      ["leg", "аяқ", "My leg hurts after football."],
      ["mouth", "ауыз", "Open your mouth, please."],
      ["nose", "мұрын", "The baby has a small nose."],
      ["ear", "құлақ", "I have a pain in my ear."],
      ["tooth", "тіс", "Brush your teeth twice a day."],
    ]],
    ["B1", "daily", [
      ["advice", "кеңес", "Can you give me some advice?"],
      ["afford", "шамасы жету (қаржылай)", "We can't afford a new car."],
      ["borrow", "қарызға алу", "Can I borrow your pen?"],
      ["lend", "қарызға беру", "Could you lend me some money?"],
      ["decide", "шешу, шешім қабылдау", "I decided to learn English."],
      ["expect", "күту, үміт ету", "I expect good results this year."],
      ["mention", "атап өту, айтып кету", "She mentioned your name."],
      ["notice", "байқау, аңғару", "Did you notice the new sign?"],
      ["promise", "уәде беру", "I promise to call you."],
      ["receive", "алу (жіберілгенді)", "I received your letter yesterday."],
      ["remind", "еске салу", "Remind me to buy bread."],
      ["replace", "ауыстыру", "We need to replace the old window."],
      ["condition", "жағдай, күй", "The car is in good condition."],
      ["convenient", "ыңғайлы", "Is Monday convenient for you?"],
      ["dangerous", "қауіпті", "Swimming here is dangerous."],
      ["familiar", "таныс", "This song sounds familiar."],
      ["suitable", "сай, лайық", "This film is not suitable for children."],
      ["neighbour", "көрші", "Our neighbour has a big dog."],
      ["rent", "жалға алу; жалдау ақысы", "They rent a flat in Almaty."],
    ]],
    ["B1", "work", [
      ["apply", "өтініш беру", "She applied for a job in Astana."],
      ["arrange", "ұйымдастыру, келісіп қою", "Let's arrange a meeting for Monday."],
      ["offer", "ұсыну", "They offered me a job."],
      ["solve", "шешу (мәселені)", "We solved the problem together."],
      ["career", "мансап", "She wants a career in medicine."],
      ["successful", "табысты", "She is a successful businesswoman."],
      ["deliver", "жеткізу", "They deliver pizza in thirty minutes."],
      ["earn", "табу (ақша)", "He earns money in the summer."],
    ]],
    ["B1", "society", [
      ["argue", "айтысу, дауласу", "My brothers often argue about football."],
      ["behave", "өзін ұстау", "The children behaved well at the museum."],
      ["complain", "шағымдану", "He complained about the noise."],
      ["refuse", "бас тарту", "He refused to answer the question."],
      ["disadvantage", "кемшілік", "The main disadvantage is the price."],
      ["competition", "жарыс, байқау", "He won a singing competition."],
      ["relationship", "қарым-қатынас", "They have a good relationship."],
      ["responsibility", "жауапкершілік", "A pet is a big responsibility."],
      ["independent", "тәуелсіз, өз бетінше", "Students become more independent at university."],
      ["serious", "байсалды; ауыр", "Pollution is a serious problem."],
      ["permission", "рұқсат", "You need permission to enter."],
      ["rule", "ереже", "Follow the rules of the game."],
      ["volunteer", "ерікті", "He works as a volunteer at the hospital."],
      ["freedom", "бостандық, еркіндік", "Freedom is important to everyone."],
    ]],
    ["B1", "culture", [
      ["celebrate", "тойлау, атап өту", "We celebrate Nauryz in March."],
      ["invite", "шақыру", "They invited us to the wedding."],
      ["respect", "құрметтеу", "We respect our elders."],
      ["typical", "әдеттегі, тән", "Beshbarmak is a typical Kazakh dish."],
      ["ancient", "көне, ежелгі", "Turkistan is an ancient city."],
      ["custom", "салт-дәстүр", "It is a custom to take off your shoes."],
      ["guest", "қонақ", "We have guests tonight."],
      ["wedding", "үйлену тойы", "My cousin's wedding is in June."],
    ]],
    ["B1", "feelings", [
      ["disappoint", "көңілін қалдыру", "The film disappointed me."],
      ["confidence", "өзіне сенімділік", "Speaking practice gives you confidence."],
      ["curious", "әуесқой, қызығушы", "Children are curious about everything."],
      ["generous", "жомарт", "Kazakh people are generous hosts."],
      ["honest", "адал, шыншыл", "Please give me an honest answer."],
      ["patient", "шыдамды; науқас", "Be patient, the bus will come soon."],
      ["reliable", "сенімді, тиянақты", "He is a reliable friend."],
      ["anxious", "уайымдаған, алаңдаған", "I feel anxious before exams."],
      ["nervous", "қобалжыған", "I'm nervous about the interview."],
      ["shy", "ұялшақ", "He is shy with new people."],
      ["surprise", "тосын сый; таңғалу", "What a nice surprise!"],
      ["trust", "сену", "I trust my best friend."],
      ["upset", "ренжіген, көңілі түскен", "She is upset about her exam."],
    ]],
    ["B1", "education", [
      ["encourage", "жігерлендіру, ынталандыру", "My teacher encourages me to read more."],
      ["prepare", "дайындау, дайындалу", "I am preparing for the exam."],
      ["provide", "қамтамасыз ету", "The school provides free lunch."],
      ["share", "бөлісу", "Share your ideas with the class."],
      ["degree", "диплом, дәреже", "She has a degree in economics."],
      ["prize", "жүлде", "She won first prize."],
      ["memory", "ес; естелік", "I have a good memory for names."],
      ["instructions", "нұсқаулық", "Read the instructions first."],
    ]],
    ["B1", "travel", [
      ["suggest", "кеңес беру, ұсыныс айту", "I suggest going by train."],
      ["traffic", "жол қозғалысы, кептеліс", "There is a lot of traffic in the morning."],
      ["accommodation", "тұратын жер", "The price includes accommodation."],
      ["abroad", "шетелде, шетелге", "He wants to study abroad."],
      ["crowded", "адамға толы", "The bus is crowded in the morning."],
      ["local", "жергілікті", "We bought fruit at the local market."],
      ["safe", "қауіпсіз", "Is this area safe at night?"],
    ]],
    ["B1", "health", [
      ["avoid", "аулақ болу, болдырмау", "Try to avoid fast food."],
      ["appointment", "қабылдауға жазылу", "I have a doctor's appointment at ten."],
      ["habit", "әдет", "Reading is a good habit."],
      ["equipment", "жабдық", "The gym has new equipment."],
      ["weight", "салмақ", "What is the weight of this bag?"],
    ]],
    ["B1", "environment", [
      ["protect", "қорғау", "We must protect nature."],
      ["waste", "ысырап ету, босқа жұмсау", "Don't waste water."],
      ["pollution", "ластану", "Air pollution is a big problem in cities."],
    ]],
  ];

  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const existing = new Set(D.vocab.map((w) => w.en.toLowerCase()));
  WORDS.forEach(([level, topic, words]) => {
    words.forEach(([en, kk, example]) => {
      if (existing.has(en.toLowerCase())) return;
      existing.add(en.toLowerCase());
      D.vocab.push({ id: `w_${slug(en)}`, en, kk, level, topic, example });
    });
  });

  const known = new Set(D.topics.map((t) => t.id));
  [
    { id: "numbers", label: "Numbers" },
    { id: "animals", label: "Animals" },
    { id: "clothes", label: "Clothes" },
  ].forEach((t) => !known.has(t.id) && D.topics.push(t));

  /* ---------- Grammar lessons ---------- */
  const mcq = (q, options, a, exp) => ({ type: "mcq", q, options, a, exp });
  const build = (kk, en) => ({ type: "build", kk, en });

  const LESSONS = [
    {
      after: "g13",
      id: "g19",
      title: "Pronouns: I / me / my",
      level: "A1",
      body: `
        <h2>Pronouns: I / me / my</h2>
        <p><strong>Мағынасы:</strong> есімдіктердің үш түрі бар: кім істейді (<em>I</em>), кімге (<em>me</em>) және кімдікі (<em>my</em>).</p>
        <ul>
          <li><strong>Кім?</strong> I · you · he · she · it · we · they</li>
          <li><strong>Кімге / кімді?</strong> me · you · him · her · it · us · them</li>
          <li><strong>Кімдікі?</strong> my · your · his · her · its · our · their</li>
        </ul>
        <ul>
          <li><em>I</em> love <em>my</em> mother. She helps <em>me</em> every day.</li>
          <li>This is Arman. <em>His</em> sister is a doctor. I know <em>him</em> well.</li>
        </ul>
        <p><strong>Ереже:</strong> етістіктен кейін <em>me, him, her, us, them</em> қолданылады: <em>Call me!</em> (<s>Call I</s>).</p>
      `,
      practice: {
        q: "This is ___ book. (I)",
        options: ["me", "my", "I", "mine"],
        answer: 1,
        explain: "Кімдікі? → my book.",
      },
      drills: [
        mcq("___ name is Dana.", ["She", "Her", "Hers", "Him"], 1, "Кімдікі? she → her name."),
        mcq("Can you help ___?", ["I", "my", "me", "mine"], 2, "Етістіктен кейін → me."),
        mcq("They love ___ grandmother.", ["they", "them", "their", "theirs"], 2, "Кімдікі? they → their."),
        mcq("This is Arman. I know ___ well.", ["he", "him", "his", "her"], 1, "Етістіктен кейін → him."),
        build("Бұл менің досым.", "This is my friend."),
        build("Олардың үйі үлкен.", "Their house is big."),
      ],
    },
    {
      after: "g1",
      id: "g20",
      title: "Can / could",
      level: "A1",
      body: `
        <h2>Can / could</h2>
        <p><strong>Мағынасы:</strong> <em>can</em> — «ала аламын, қолымнан келеді», <em>could</em> — өткен шақта «ала алатынмын».</p>
        <p><strong>Формула:</strong> кім + <strong>can</strong> + V1. Барлық жақта бірдей: I can · she can (<s>she cans</s>).</p>
        <ul>
          <li>I <em>can</em> swim. She <em>can</em> speak three languages.</li>
          <li><strong>Болымсыз:</strong> I <em>can't</em> drive.</li>
          <li><strong>Сұрақ, өтініш:</strong> <em>Can</em> you help me? <em>Can</em> I sit here?</li>
          <li><strong>Өткен шақ:</strong> When I was five, I <em>could</em> read.</li>
        </ul>
        <p><strong>Ереже:</strong> <em>can</em>-нан кейін <em>to</em> қойылмайды: <em>I can swim</em> (<s>I can to swim</s>).</p>
      `,
      practice: {
        q: "When I was five, I ___ swim.",
        options: ["can", "could", "cans", "can to"],
        answer: 1,
        explain: "Өткен шақ → could.",
      },
      drills: [
        mcq("She ___ speak three languages.", ["can", "cans", "can to", "is can"], 0, "can + V1, -s жалғанбайды."),
        mcq("___ you help me, please?", ["Can", "Do", "Are", "Have"], 0, "Өтініш → Can you…?"),
        mcq("I can't ___ this word.", ["read", "reads", "reading", "to read"], 0, "can't + V1."),
        mcq("When I was a child, I ___ ride a bike.", ["can", "could", "can to", "could to"], 1, "Өткен шақ → could."),
        build("Мен жүзе аламын.", "I can swim."),
        build("Ол гитара тарта алмайды.", "He can't play the guitar."),
      ],
    },
    {
      after: "g20",
      id: "g21",
      title: "Prepositions: in / on / at",
      level: "A1–A2",
      body: `
        <h2>Prepositions: in / on / at</h2>
        <p><strong>Мағынасы:</strong> қазақшадағы <em>-да, -де, -та</em> жалғауы ағылшыншада үш сөзбен беріледі.</p>
        <p><strong>Уақыт:</strong></p>
        <ul>
          <li><strong>at</strong> — нақты сағат: <em>at 7 o'clock, at night</em></li>
          <li><strong>on</strong> — күн: <em>on Monday, on 5 May, on my birthday</em></li>
          <li><strong>in</strong> — ай, жыл, маусым, тәулік бөлігі: <em>in May, in 2025, in winter, in the morning</em></li>
        </ul>
        <p><strong>Орын:</strong></p>
        <ul>
          <li><strong>in</strong> — ішінде: <em>in the room, in Almaty, in Kazakhstan</em></li>
          <li><strong>on</strong> — бетінде: <em>on the table, on the wall</em></li>
          <li><strong>at</strong> — нақты нүкте: <em>at the bus stop, at school, at home</em></li>
        </ul>
      `,
      practice: {
        q: "My birthday is ___ May.",
        options: ["in", "on", "at", "to"],
        answer: 0,
        explain: "Ай → in May.",
      },
      drills: [
        mcq("The lesson starts ___ nine o'clock.", ["in", "on", "at", "by"], 2, "Сағат → at."),
        mcq("We have English ___ Monday.", ["in", "on", "at", "to"], 1, "Апта күні → on."),
        mcq("The keys are ___ the table.", ["in", "on", "at", "of"], 1, "Бетінде → on."),
        mcq("She lives ___ Almaty.", ["in", "on", "at", "to"], 0, "Қала, ел → in."),
        mcq("I'll meet you ___ the bus stop.", ["in", "on", "at", "to"], 2, "Нақты нүкте → at."),
        build("Мен таңертең жұмыс істеймін.", "I work in the morning."),
      ],
    },
    {
      after: "g5",
      id: "g22",
      title: "Much / many / some / any",
      level: "A2",
      body: `
        <h2>Much / many / some / any</h2>
        <p><strong>Мағынасы:</strong> ағылшыншада зат есім <em>саналатын</em> (an apple, two apples) және <em>саналмайтын</em> (water, money, time) болады.</p>
        <ul>
          <li><strong>many</strong> — саналатын: <em>many friends, How many books?</em></li>
          <li><strong>much</strong> — саналмайтын: <em>much water, How much money?</em></li>
          <li><strong>some</strong> — болымды сөйлемде: <em>I have some apples. There is some milk.</em></li>
          <li><strong>any</strong> — сұрақ пен болымсызда: <em>Do you have any questions? I don't have any money.</em></li>
        </ul>
        <p><strong>Ереже:</strong> <em>people, children</em> — саналатын: <em>many people</em>. <em>Water, sugar, information, advice</em> — саналмайтын.</p>
      `,
      practice: {
        q: "How ___ water do you drink every day?",
        options: ["many", "much", "any", "some"],
        answer: 1,
        explain: "water — саналмайды → How much?",
      },
      drills: [
        mcq("How ___ brothers do you have?", ["much", "many", "any", "some"], 1, "Саналатын → many."),
        mcq("I don't have ___ time today.", ["many", "much", "a", "few"], 1, "time — саналмайды → much."),
        mcq("There is ___ milk in the fridge.", ["some", "many", "any", "a"], 0, "Болымды сөйлем → some."),
        mcq("Are there ___ apples on the table?", ["some", "any", "much", "a"], 1, "Сұрақ → any."),
        mcq("There are ___ people in the park today.", ["much", "many", "a", "any"], 1, "people — саналады → many."),
        build("Маған біраз су керек.", "I need some water."),
      ],
    },
    {
      after: "g3",
      id: "g23",
      title: "Past Continuous",
      level: "A2",
      body: `
        <h2>Past Continuous</h2>
        <p><strong>Мағынасы:</strong> өткенде белгілі бір сәтте созылып жатқан іс: «…ып жатқан едім, …ып отырдым».</p>
        <p><strong>Формула:</strong> I/He/She/It <strong>was</strong> + V-ing · You/We/They <strong>were</strong> + V-ing</p>
        <ul>
          <li>At 8 pm I <em>was watching</em> TV.</li>
          <li>They <em>were playing</em> football when it started to rain.</li>
          <li><strong>Болымсыз:</strong> She <em>wasn't sleeping</em>. <strong>Сұрақ:</strong> What <em>were</em> you <em>doing</em>?</li>
        </ul>
        <p><strong>Ереже:</strong> ұзақ іс — Past Continuous, оны бөлген қысқа іс — Past Simple: <em>I was reading when you called.</em></p>
      `,
      practice: {
        q: "I ___ TV when you called.",
        options: ["watched", "was watching", "were watching", "am watching"],
        answer: 1,
        explain: "I → was + V-ing.",
      },
      drills: [
        mcq("They ___ football at 5 pm yesterday.", ["was playing", "were playing", "played", "are playing"], 1, "They → were + V-ing."),
        mcq("She was ___ when the phone rang.", ["sleep", "sleeping", "slept", "sleeps"], 1, "was + V-ing."),
        mcq("What ___ you doing at eight last night?", ["was", "were", "did", "are"], 1, "you → were."),
        mcq("While I was walking, it ___ to rain.", ["started", "was start", "starts", "starting"], 0, "Бөлген қысқа іс → Past Simple."),
        build("Мен кеше кешке кітап оқып отырдым.", "I was reading a book last night."),
      ],
    },
    {
      after: "g7",
      id: "g24",
      title: "Used to",
      level: "B1",
      body: `
        <h2>Used to</h2>
        <p><strong>Мағынасы:</strong> бұрын болған, қазір жоқ әдет немесе жағдай: «бұрын …-атынмын».</p>
        <p><strong>Формула:</strong> кім + <strong>used to</strong> + V1</p>
        <ul>
          <li>I <em>used to</em> live in Shymkent. (Қазір басқа жерде тұрамын.)</li>
          <li>There <em>used to</em> be a cinema here.</li>
          <li><strong>Болымсыз:</strong> I <em>didn't use to</em> like coffee.</li>
          <li><strong>Сұрақ:</strong> <em>Did</em> you <em>use to</em> play football?</li>
        </ul>
        <p><strong>Ереже:</strong> <em>did</em> бар жерде <em>use to</em> (-d жоқ): <em>didn't use to, Did you use to…?</em></p>
      `,
      practice: {
        q: "I ___ live in Shymkent, but now I live in Astana.",
        options: ["use to", "used to", "am used", "using to"],
        answer: 1,
        explain: "Бұрынғы жағдай → used to + V1.",
      },
      drills: [
        mcq("He ___ play football, but now he plays tennis.", ["used to", "use to", "uses to", "using"], 0, "Бұрынғы әдет → used to + V1."),
        mcq("Did you ___ have long hair?", ["used to", "use to", "using to", "uses"], 1, "Сұрақта: Did … use to?"),
        mcq("We didn't ___ have a car.", ["used to", "use to", "use", "used"], 1, "Болымсыз: didn't use to."),
        mcq("There ___ be a cinema here.", ["used to", "use to", "was used", "uses"], 0, "There used to be…"),
        build("Мен бұрын шай ішпейтінмін.", "I didn't use to drink tea."),
        build("Ол бұрын Алматыда тұратын.", "She used to live in Almaty."),
      ],
    },
  ];
  const haveL = new Set(D.lessons.map((l) => l.id));
  LESSONS.forEach(({ after, ...l }) => {
    if (haveL.has(l.id)) return;
    const i = D.lessons.findIndex((x) => x.id === after);
    D.lessons.splice(i === -1 ? D.lessons.length : i + 1, 0, l);
  });

  /* ---------- A1 listening (shown first in the list; the data order keeps each track's voice) ---------- */
  const qq = (question, options, a) => ({ q: question, options, a });
  [
    {
      id: "l16",
      title: "Meet My Family",
      level: "A1",
      duration: "≈1 min",
      text: "Hello! My name is Aidana. I am ten years old. I live in Taraz with my family. My father is a teacher and my mother is a doctor. I have one brother. His name is Nurlan. He is fifteen. We have a cat. Her name is Snow. She is white. I love my family.",
      questions: [
        qq("Where does Aidana live?", ["In Almaty", "In Taraz", "In Astana", "In Aktobe"], 1),
        qq("What is her mother's job?", ["A teacher", "A doctor", "A driver", "A cook"], 1),
        qq("What colour is the cat?", ["Black", "Grey", "White", "Brown"], 2),
      ],
    },
    {
      id: "l17",
      title: "At the Shop",
      level: "A1",
      duration: "≈1 min",
      text: "Good morning! Can I help you? Yes, please. I want some bread and milk. Here you are. Anything else? Yes, three apples, please. OK. That is eight hundred tenge. Here is one thousand. Thank you. Here is your change, two hundred tenge. Have a nice day!",
      questions: [
        qq("What does the customer want first?", ["Tea and sugar", "Bread and milk", "Eggs and rice", "Juice and cake"], 1),
        qq("How many apples does the customer buy?", ["Two", "Three", "Four", "Five"], 1),
        qq("How much is it?", ["Two hundred tenge", "Five hundred tenge", "Eight hundred tenge", "One thousand tenge"], 2),
      ],
    },
    {
      id: "l18",
      title: "My Day",
      level: "A1",
      duration: "≈1 min",
      text: "I get up at seven o'clock. I wash my face and have breakfast. I usually eat bread, cheese and eggs. I go to school by bus. Lessons begin at eight. I like English and maths. I come home at two. In the evening I do my homework and watch TV. I go to bed at ten.",
      questions: [
        qq("When does the speaker get up?", ["At six", "At seven", "At eight", "At ten"], 1),
        qq("How does the speaker go to school?", ["On foot", "By car", "By bus", "By taxi"], 2),
        qq("What does the speaker do in the evening?", ["Plays football", "Cooks dinner", "Does homework and watches TV", "Goes to the cinema"], 2),
      ],
    },
  ].forEach((tr) => !D.listening.some((x) => x.id === tr.id) && D.listening.push(tr));

  /* ---------- Beginner writing and speaking (not IELTS: the AI marks them for the level) ---------- */
  [
    {
      id: "w6",
      level: "A1",
      task: "A1",
      title: "About me",
      prompt: "Write about yourself: your name, age, city, family and what you like doing.",
      minWords: 40,
      minutes: 15,
      tips: ["My name is … I am … years old.", "I live in … with my …", "I like … / I don't like …", "Қысқа сөйлемдер жаз: әр сөйлемде бір ой."],
    },
    {
      id: "w7",
      level: "A2",
      task: "A2",
      title: "My weekend",
      prompt: "Write about your last weekend. Where did you go? What did you do? Who were you with? Did you like it?",
      minWords: 50,
      minutes: 20,
      tips: ["Past Simple: I went, I saw, I played…", "On Saturday… / On Sunday…", "Сөйлемдерді байланыстыр: and, but, then, after that."],
    },
    {
      id: "w8",
      level: "A2",
      task: "A2",
      title: "An email to a friend",
      prompt: "Write an email to your friend. Invite them to your birthday party. Say when and where it is, and what you will do there.",
      minWords: 50,
      minutes: 20,
      tips: ["Hi …! / Dear …,", "I'm having a party on … at …", "We will … / Can you come?", "Соңында: See you soon! / Best wishes,"],
    },
  ].forEach((w) => !D.writing.some((x) => x.id === w.id) && D.writing.push(w));

  [
    {
      id: "s7",
      level: "A1",
      part: "A1",
      title: "Introduce yourself",
      cue: ["your name and age", "where you live", "your family", "what you like doing"],
      prep: 30,
      speak: 60,
    },
    {
      id: "s8",
      level: "A1",
      part: "A1",
      title: "Your home",
      cue: ["where your home is", "how many rooms it has", "your favourite room", "what you do there"],
      prep: 30,
      speak: 60,
    },
    {
      id: "s9",
      level: "A2",
      part: "A2",
      title: "Your favourite food",
      cue: ["what the food is", "who makes it", "when you eat it", "why you like it"],
      prep: 45,
      speak: 90,
    },
  ].forEach((s) => !D.speaking.some((x) => x.id === s.id) && D.speaking.push(s));
})();
