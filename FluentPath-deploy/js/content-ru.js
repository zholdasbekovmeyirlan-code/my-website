/* FluentPath — Russian versions of the learning content, shown when the interface is in Russian.
   Adds w.ru to words, bodyRu / explainRu / expRu / ru to grammar lessons, ru to phrases, a fourth
   item (Russian) to story lines, optionsRu / expRu to the vocabulary quiz and tipsRu to writing tasks.
   Loaded after every content file. */
(() => {
  const D = window.FP_DATA;
  if (!D) return;

  /* ---------- Words: "english=русский", one per line ---------- */
  const WORDS = `
hello=привет
thank you=спасибо
please=пожалуйста
friend=друг
family=семья
school=школа
teacher=учитель
book=книга
student=студент
city=город
work=работа
travel=путешествие
ticket=билет
airport=аэропорт
meeting=встреча, собрание
schedule=расписание
customer=клиент
improve=улучшать
practice=практика
describe=описывать
journey=поездка
luggage=багаж
healthy=здоровый
energy=энергия
problem=проблема
result=результат
example=пример
important=важный
different=разный, другой
similar=похожий
achieve=достигать
advantage=преимущество
although=хотя
however=однако
available=доступный
benefit=польза
challenge=вызов, трудная задача
community=сообщество
compare=сравнивать
confident=уверенный
consider=рассматривать
contain=содержать
continue=продолжать
create=создавать
culture=культура
decision=решение
develop=развивать
difference=разница
discuss=обсуждать
economy=экономика
education=образование
effect=эффект, влияние
effort=усилие
environment=окружающая среда
especially=особенно
experience=опыт
explain=объяснять
factor=фактор
focus=сосредоточиться
global=глобальный
government=правительство
growth=рост
include=включать
increase=увеличиваться
influence=влияние
information=информация
interview=собеседование, интервью
issue=вопрос, проблема
knowledge=знание
level=уровень
major=основной; специальность
manage=управлять
method=метод
modern=современный
necessary=необходимый
opinion=мнение
opportunity=возможность
organize=организовывать
participate=участвовать
performance=производительность, результат
population=население
positive=положительный
prefer=предпочитать
prevent=предотвращать
process=процесс
produce=производить
quality=качество
reason=причина
recommend=рекомендовать
reduce=уменьшать
require=требовать
research=исследование
resource=ресурс
responsible=ответственный
role=роль
section=раздел
significant=значительный
skill=навык
society=общество
solution=решение
source=источник
strategy=стратегия
structure=структура
success=успех
support=поддержка
system=система
technology=технология
traditional=традиционный
trend=тенденция
value=ценность
variety=разнообразие
abandon=бросать, отказываться
abstract=абстрактный
academic=академический
access=доступ
accurate=точный
acknowledge=признавать
acquire=приобретать, осваивать
adapt=приспосабливаться
adequate=достаточный
adjacent=соседний, смежный
adjust=регулировать
administration=администрация
adult=взрослый
advocate=сторонник; выступать за
affect=влиять
aggregate=совокупный
aid=помощь
allocate=распределять
alter=изменять
alternative=альтернатива
ambiguous=двусмысленный
amend=вносить поправки
analogy=аналогия
analyse=анализировать
annual=ежегодный
anticipate=предвидеть
apparent=очевидный
appendix=приложение
appreciate=ценить
approach=подход
appropriate=подходящий
approximate=приблизительный
arbitrary=произвольный
area=область, район
aspect=аспект
assemble=собирать
assess=оценивать
assign=поручать
assist=помогать
assume=предполагать
assure=уверять
attach=прикреплять
attain=достигать
attitude=отношение
attribute=приписывать
author=автор
authority=власть; авторитет
automate=автоматизировать
aware=осведомлённый
behalf=от имени
bias=предвзятость
bond=связь
brief=краткий
bulk=большая часть
capable=способный
capacity=ёмкость, мощность
category=категория
cease=прекращать
channel=канал
chapter=глава
chart=диаграмма
chemical=химический
circumstance=обстоятельство
cite=цитировать, ссылаться
civil=гражданский
clarify=уточнять
classic=классический
clause=пункт; придаточное предложение
code=код
coherent=связный
coincide=совпадать
collapse=крах, обрушение
colleague=коллега
commence=начинать
comment=комментарий
commission=комиссия; заказ
commit=брать обязательство
commodity=товар
communicate=общаться
compatible=совместимый
compensate=компенсировать
compile=составлять
complement=дополнять
complex=сложный
component=компонент
comprehensive=всесторонний
comprise=состоять из
compute=вычислять
conceive=задумывать
concentrate=сосредоточиться
concept=понятие
conclude=делать вывод
concurrent=одновременный
conduct=проводить
confer=присуждать; совещаться
confine=ограничивать
confirm=подтверждать
conflict=конфликт
conform=соответствовать
consent=согласие
consequent=последующий
considerable=значительный
consist=состоять
constant=постоянный
constitute=составлять
constrain=ограничивать
construct=строить
consult=консультироваться
consume=потреблять
contact=контакт
contemporary=современный
context=контекст
contract=договор
contradict=противоречить
contrary=противоположный
contrast=контраст
contribute=вносить вклад
controversy=спор, разногласия
convene=созывать
converse=беседовать
convert=превращать
convince=убеждать
cooperate=сотрудничать
coordinate=координировать
core=основной
corporate=корпоративный
correspond=соответствовать
couple=пара; несколько
credit=кредит; доверие
criteria=критерии
crucial=решающий
currency=валюта
cycle=цикл
data=данные
debate=дебаты
decade=десятилетие
decline=снижение
deduce=делать вывод
define=определять
definite=определённый
demonstrate=демонстрировать
denote=обозначать
deny=отрицать
depress=понижать
derive=получать, извлекать
design=дизайн
despite=несмотря на
detect=обнаруживать
deviate=отклоняться
device=устройство
devote=посвящать
differentiate=различать
dimension=измерение
diminish=уменьшаться
discrete=отдельный
discriminate=различать; дискриминировать
displace=вытеснять
display=показывать
dispose=избавляться; располагать
distinct=отчётливый, особый
distort=искажать
distribute=распределять
diverse=разнообразный
document=документ
domain=область, сфера
domestic=внутренний
dominate=доминировать
draft=черновик, проект
drama=драма
duration=продолжительность
dynamic=динамичный
edit=редактировать
element=элемент
eliminate=устранять
emerge=появляться
emphasis=акцент
empirical=эмпирический
enable=давать возможность
encounter=сталкиваться
enforce=обеспечивать соблюдение (закона)
enhance=улучшать
enormous=огромный
ensure=обеспечивать
entity=объект, организация
equate=приравнивать
equip=оснащать
equivalent=эквивалент
erode=разрушаться, подрывать
error=ошибка
establish=устанавливать, основывать
estate=имущество
estimate=оценивать
ethic=этика
ethnic=этнический
evaluate=оценивать
eventual=окончательный
evident=очевидный
evolve=развиваться
exceed=превышать
exclude=исключать
exhibit=выставлять, показывать
expand=расширять
expert=эксперт
explicit=явный
exploit=использовать
export=экспорт
expose=раскрывать
external=внешний
extract=извлекать
facilitate=облегчать
feature=особенность
federal=федеральный
fee=плата, взнос
file=файл
final=последний, финальный
finance=финансы
finite=конечный, ограниченный
flexible=гибкий
fluctuate=колебаться
format=формат
formula=формула
forthcoming=предстоящий
found=основывать
foundation=основа
framework=рамки, основа
function=функция
fund=фонд; финансировать
fundamental=основной
furthermore=кроме того
gender=пол, гендер
generate=создавать, генерировать
generation=поколение
globe=земной шар
goal=цель
grade=оценка
grant=грант
guarantee=гарантия
guideline=рекомендация
hence=следовательно
hierarchy=иерархия
highlight=выделять
hypothesis=гипотеза
identical=одинаковый
identify=определять
ideology=идеология
ignorance=невежество
illustrate=иллюстрировать
image=образ, изображение
immigrate=иммигрировать
impact=воздействие, влияние
implement=внедрять, осуществлять
implicate=вовлекать, впутывать
implicit=скрытый, подразумеваемый
imply=подразумевать
impose=вводить, навязывать (ограничение)
incentive=стимул
incidence=частота, распространённость
incline=быть склонным
income=доход
incorporate=включать
index=индекс
indicate=указывать
individual=личность; индивидуальный
induce=вызывать, побуждать
inevitable=неизбежный
infer=делать вывод
infrastructure=инфраструктура
inherent=присущий
inhibit=сдерживать
initial=начальный
initiate=начинать
injure=ранить, травмировать
innovate=внедрять новшества
input=ввод, вклад
insert=вставлять
insight=понимание
inspect=проверять
instance=пример, случай
institute=институт
instruct=инструктировать
integral=неотъемлемый
integrate=объединять
integrity=честность, целостность
intelligence=интеллект
intense=интенсивный
interact=взаимодействовать
intermediate=средний, промежуточный
internal=внутренний
interpret=толковать
interval=интервал
intervene=вмешиваться
intrinsic=внутренний, присущий
invest=инвестировать
investigate=расследовать, исследовать
invoke=вызывать, ссылаться на
involve=вовлекать
isolate=изолировать
item=предмет, пункт
job=работа
journal=журнал
justify=оправдывать, обосновывать
label=ярлык, этикетка
labour=труд
layer=слой
lecture=лекция
legal=законный, юридический
legislate=издавать законы
levy=облагать налогом
liberal=либеральный
licence=лицензия
likewise=так же
link=связь, ссылка
locate=находить, располагать
logic=логика
maintain=поддерживать, сохранять
manipulate=манипулировать
manual=ручной; руководство
margin=поле; маржа
mature=зрелый
maximise=максимально увеличивать
mechanism=механизм
media=СМИ
mediate=быть посредником
medical=медицинский
medium=средство; средний
mental=психический, умственный
migrate=мигрировать
military=военный
minimal=минимальный
minimise=сводить к минимуму
minimum=минимум
ministry=министерство
minor=незначительный
mode=режим
modify=изменять
monitor=следить
motive=мотив
mutual=взаимный
negate=отрицать
network=сеть
neutral=нейтральный
nevertheless=тем не менее
nonetheless=тем не менее
norm=норма
notion=понятие
notwithstanding=несмотря на
nuclear=ядерный
objective=цель; объективный
obtain=получать
obvious=очевидный
occupy=занимать
occur=происходить
odd=нечётный; странный
offset=компенсировать
ongoing=продолжающийся
option=вариант
orient=ориентировать
outcome=результат
output=выпуск, продукция
overall=в целом, общий
overlap=пересекаться
overseas=за границей
panel=панель, комиссия
paradigm=парадигма
paragraph=абзац
parallel=параллель
parameter=параметр
partner=партнёр
passive=пассивный, страдательный
perceive=воспринимать
percent=процент
period=период
persist=упорствовать, сохраняться
perspective=точка зрения
phase=фаза
phenomenon=явление
philosophy=философия
physical=физический
plus=плюс
policy=политика
portion=часть, порция
pose=создавать (проблему)
potential=потенциал
practitioner=специалист
precede=предшествовать
precise=точный
predict=предсказывать
predominant=преобладающий
preliminary=предварительный
presume=предполагать
previous=предыдущий
primary=основной, начальный
prime=главный
principal=главный
principle=принцип
prior=предшествующий
priority=приоритет
proceed=продолжать
professional=профессиональный
prohibit=запрещать
project=проект
promote=продвигать
proportion=доля, пропорция
prospect=перспектива
protocol=протокол
psychology=психология
publication=публикация
publish=публиковать
purchase=покупка; покупать
pursue=добиваться, преследовать
qualitative=качественный
quote=цитата
radical=радикальный
random=случайный
range=диапазон
ratio=соотношение
rational=рациональный
react=реагировать
recover=выздоравливать, восстанавливаться
refine=совершенствовать
regime=режим
region=регион
register=регистрироваться
regulate=регулировать
reinforce=укреплять
reject=отклонять
relax=отдыхать, расслабляться
release=выпускать
relevant=актуальный, относящийся к делу
reliance=зависимость
reluctant=неохотный
rely=полагаться
remove=удалять
reside=проживать
resolve=решать
respond=отвечать
restore=восстанавливать
restrain=сдерживать
restrict=ограничивать
retain=сохранять
reveal=раскрывать
revenue=доход
reverse=обратный
revise=пересматривать
revolution=революция
rigid=жёсткий
route=маршрут
scenario=сценарий
scheme=схема, программа
scope=масштаб, рамки
sector=сектор
secure=безопасный
seek=искать
select=выбирать
sequence=последовательность
series=серия
severe=суровый, тяжёлый
shift=сдвиг, смена
simulate=моделировать
site=место; сайт
so-called=так называемый
sole=единственный
somewhat=несколько, отчасти
specific=конкретный
specify=уточнять
sphere=сфера
stable=стабильный
statistic=статистика
status=статус
straightforward=простой, понятный
stress=стресс
style=стиль
submit=сдавать, подавать
subordinate=подчинённый
subsequent=последующий
subsidy=субсидия
substitute=заменять
successor=преемник
sufficient=достаточный
sum=сумма
summary=краткое содержание
supplement=дополнение
survey=опрос
survive=выживать
suspend=приостанавливать
sustain=поддерживать
symbol=символ
tape=лента, плёнка
target=цель, мишень
task=задание
team=команда
technical=технический
technique=техника, приём
temporary=временный
tense=время (глагола); напряжённый
terminate=прекращать
text=текст
theme=тема
theory=теория
thereby=тем самым
thesis=тезис
topic=тема
trace=след
tradition=традиция
transfer=переводить, передавать
transform=преобразовывать
transit=транзит
transmit=передавать
transport=транспорт
trigger=вызывать, провоцировать
ultimate=окончательный
undergo=подвергаться, проходить
underlie=лежать в основе
undertake=брать на себя
uniform=единообразный
unify=объединять
unique=уникальный
utilise=использовать
valid=действительный
vary=различаться
vehicle=транспортное средство
version=версия
via=через
violate=нарушать
virtual=виртуальный
visible=видимый
vision=видение
visual=визуальный
volume=объём
voluntary=добровольный
welfare=благосостояние
whereas=тогда как
whereby=посредством чего
widespread=широко распространённый
willing=готовый
goodbye=до свидания
good morning=доброе утро
good night=спокойной ночи
sorry=извини, извините
yes=да
no=нет
name=имя
welcome=добро пожаловать
how are you=как дела
nice to meet you=приятно познакомиться
see you=увидимся
excuse me=извините
mother=мама, мать
father=папа, отец
sister=сестра
brother=брат
son=сын
daughter=дочь
child=ребёнок
parents=родители
grandmother=бабушка
grandfather=дедушка
husband=муж
wife=жена
baby=малыш, младенец
man=мужчина
woman=женщина
boy=мальчик
girl=девочка
people=люди
bread=хлеб
water=вода
milk=молоко
tea=чай
coffee=кофе
meat=мясо
apple=яблоко
rice=рис
egg=яйцо
soup=суп
sugar=сахар
breakfast=завтрак
lunch=обед
dinner=ужин
eat=есть
drink=пить
hungry=голодный
delicious=вкусный
fruit=фрукт
vegetable=овощ
house=дом
room=комната
kitchen=кухня
door=дверь
window=окно
bed=кровать
table=стол
chair=стул
key=ключ
flat=квартира
bathroom=ванная
garden=сад
floor=этаж; пол
wall=стена
day=день
week=неделя
month=месяц
year=год
today=сегодня
tomorrow=завтра
yesterday=вчера
morning=утро
evening=вечер
night=ночь
hour=час
minute=минута
time=время
now=сейчас
always=всегда
never=никогда
Monday=понедельник
weekend=выходные
birthday=день рождения
red=красный
blue=синий, голубой
green=зелёный
white=белый
black=чёрный
yellow=жёлтый
big=большой
small=маленький
new=новый
old=старый
hot=горячий, жаркий
cold=холодный
happy=счастливый
beautiful=красивый
good=хороший
bad=плохой
long=длинный
short=короткий
go=идти, ехать
come=приходить
see=видеть
know=знать
want=хотеть
like=нравиться, любить
live=жить
read=читать
write=писать
speak=говорить
listen=слушать
sleep=спать
open=открывать
close=закрывать
buy=покупать
help=помогать
give=давать
take=брать
play=играть
street=улица
shop=магазин
market=рынок, базар
bank=банк
hospital=больница
pharmacy=аптека
bus=автобус
train=поезд
taxi=такси
map=карта
left=слева, левый
right=справа, правый
near=близко, рядом
far=далеко
park=парк
bridge=мост
money=деньги
price=цена
cheap=дешёвый
expensive=дорогой
pay=платить
sell=продавать
clothes=одежда
size=размер
shoes=обувь
bag=сумка
lesson=урок
homework=домашнее задание
exam=экзамен
question=вопрос
answer=ответ
class=класс
university=университет
notebook=тетрадь
pen=ручка
learn=учить, узнавать
study=учиться
word=слово
mistake=ошибка
easy=лёгкий
difficult=трудный
remember=помнить
forget=забывать
understand=понимать
office=офис
boss=начальник
salary=зарплата
company=компания
busy=занятой
start=начинать
finish=заканчивать
head=голова
hand=рука (кисть)
eye=глаз
heart=сердце
doctor=врач
medicine=лекарство
ill=больной
pain=боль
sport=спорт
tired=уставший
rest=отдыхать
body=тело
weather=погода
sun=солнце
rain=дождь
snow=снег
wind=ветер
sky=небо
mountain=гора
river=река
lake=озеро
tree=дерево
flower=цветок
winter=зима
summer=лето
spring=весна
autumn=осень
warm=тёплый
animal=животное
horse=лошадь
sad=грустный
angry=сердитый
afraid=испуганный
kind=добрый
friendly=дружелюбный
polite=вежливый
calm=спокойный
worried=обеспокоенный
proud=гордый
funny=смешной
lazy=ленивый
smart=умный
love=любить
smile=улыбаться
feel=чувствовать
music=музыка
film=фильм
game=игра
hobby=хобби
draw=рисовать
dance=танцевать
sing=петь
swim=плавать
holiday=праздник, отпуск
party=вечеринка
photo=фотография
football=футбол
dombra=домбра
museum=музей
cinema=кинотеатр
be=быть
have=иметь
do=делать
get=получать
make=делать, готовить
look=смотреть
watch=смотреть (наблюдать)
hear=слышать
say=сказать
tell=рассказывать
talk=разговаривать
ask=спрашивать
think=думать
need=нуждаться, нужно
run=бегать
walk=ходить пешком
sit=сидеть
stand=стоять
wait=ждать
meet=встречаться
call=звонить
find=находить
lose=терять
leave=уходить, уезжать
stay=оставаться
bring=приносить
carry=нести
wear=носить (одежду)
cook=готовить еду
wash=мыть
clean=убирать; чистый
drive=водить машину
fly=летать
teach=учить, преподавать
begin=начинать(ся)
try=пробовать, стараться
use=использовать
show=показывать
send=отправлять
young=молодой
tall=высокий
fast=быстрый
slow=медленный
dirty=грязный
wrong=неправильный
same=одинаковый, тот же
little=маленький; мало
many=много (исчисляемых)
much=много (неисчисляемого)
few=мало, немного
some=немного, некоторые
all=все, весь
every=каждый
early=рано
late=поздно
often=часто
sometimes=иногда
usually=обычно
first=первый
last=последний
next=следующий
Sunday=воскресенье
January=январь
here=здесь, сюда
there=там, туда
one=один
two=два
three=три
four=четыре
five=пять
six=шесть
seven=семь
eight=восемь
nine=девять
ten=десять
twenty=двадцать
hundred=сто
thousand=тысяча
number=число, номер
dog=собака
cat=кошка
bird=птица
cow=корова
sheep=овца
camel=верблюд
fish=рыба
chicken=курица
mouse=мышь
wolf=волк
shirt=рубашка
hat=шапка, шляпа
dress=платье
jacket=куртка
coat=пальто
trousers=брюки
skirt=юбка
socks=носки
T-shirt=футболка
boots=сапоги, ботинки
phone=телефон
computer=компьютер
sofa=диван
TV=телевизор
lamp=лампа
picture=картина, рисунок
cup=чашка
plate=тарелка
food=еда
cheese=сыр
potato=картофель
salt=соль
juice=сок
cake=торт
car=машина
country=страна
village=деревня, аул
face=лицо
leg=нога
mouth=рот
nose=нос
ear=ухо
tooth=зуб
advice=совет
afford=позволить себе (по деньгам)
borrow=брать взаймы
lend=давать взаймы
decide=решать
expect=ожидать
mention=упоминать
notice=замечать
promise=обещать
receive=получать
remind=напоминать
replace=заменять
condition=состояние
convenient=удобный
dangerous=опасный
familiar=знакомый
suitable=подходящий
neighbour=сосед
rent=снимать (жильё); арендная плата
apply=подавать заявление
arrange=организовывать, договариваться
offer=предлагать
solve=решать (задачу)
career=карьера
successful=успешный
deliver=доставлять
earn=зарабатывать
argue=спорить
behave=вести себя
complain=жаловаться
refuse=отказываться
disadvantage=недостаток
competition=соревнование, конкурс
relationship=отношения
responsibility=ответственность
independent=независимый, самостоятельный
serious=серьёзный
permission=разрешение
rule=правило
volunteer=волонтёр
freedom=свобода
celebrate=праздновать
invite=приглашать
respect=уважать
typical=типичный
ancient=древний
custom=обычай
guest=гость
wedding=свадьба
disappoint=разочаровывать
confidence=уверенность в себе
curious=любопытный
generous=щедрый
honest=честный
patient=терпеливый; пациент
reliable=надёжный
anxious=тревожный, обеспокоенный
nervous=нервный, волнующийся
shy=застенчивый
surprise=сюрприз; удивление
trust=доверять
upset=расстроенный
encourage=поощрять, вдохновлять
prepare=готовить(ся)
provide=обеспечивать, предоставлять
share=делиться
degree=диплом, степень
prize=приз
memory=память; воспоминание
instructions=инструкция
suggest=предлагать, советовать
traffic=движение, пробки
accommodation=жильё
abroad=за границей, за границу
crowded=переполненный
local=местный
safe=безопасный
avoid=избегать
appointment=запись (на приём)
habit=привычка
equipment=оборудование
weight=вес
protect=защищать
waste=тратить впустую
pollution=загрязнение
`;

  /* ---------- Grammar lessons: body, practice explanation, then one entry per drill
     (an explanation for a multiple-choice drill, the sentence to translate for a "build" drill) ---------- */
  const LESSONS = {
    g13: {
      body: `
        <h2>To be: am / is / are</h2>
        <p><strong>Значение:</strong> «быть». В русском в настоящем времени часто опускается: «Я студент» = <em>I am a student</em>.</p>
        <p><strong>Формула:</strong> I <strong>am</strong> · He/She/It <strong>is</strong> · You/We/They <strong>are</strong></p>
        <ul>
          <li>I <em>am</em> from Kazakhstan.</li>
          <li>She <em>is</em> a doctor.</li>
          <li>We <em>are</em> friends.</li>
        </ul>
        <p><strong>Отрицание:</strong> I'm not · He isn't · They aren't. <strong>Вопрос:</strong> Are you ready? — Yes, I am.</p>
      `,
      explain: "you → are: Are you a student?",
      drills: ["I → am.", "My brother = he → is.", "They → are.", "She is not (isn't) tired.", "Мы друзья.", "Я студент."],
    },
    g19: {
      body: `
        <h2>Pronouns: I / me / my</h2>
        <p><strong>Значение:</strong> у местоимений три формы: кто делает (<em>I</em>), кого / кому (<em>me</em>) и чей (<em>my</em>).</p>
        <ul>
          <li><strong>Кто?</strong> I · you · he · she · it · we · they</li>
          <li><strong>Кого / кому?</strong> me · you · him · her · it · us · them</li>
          <li><strong>Чей?</strong> my · your · his · her · its · our · their</li>
        </ul>
        <ul>
          <li><em>I</em> love <em>my</em> mother. She helps <em>me</em> every day.</li>
          <li>This is Arman. <em>His</em> sister is a doctor. I know <em>him</em> well.</li>
        </ul>
        <p><strong>Правило:</strong> после глагола ставим <em>me, him, her, us, them</em>: <em>Call me!</em> (<s>Call I</s>).</p>
      `,
      explain: "Чей? → my book.",
      drills: ["Чей? she → her name.", "После глагола → me.", "Чей? they → their.", "После глагола → him.", "Это мой друг.", "Их дом большой."],
    },
    g14: {
      body: `
        <h2>There is / There are</h2>
        <p><strong>Значение:</strong> «есть, находится» — говорим, что что-то где-то есть.</p>
        <p><strong>Формула:</strong> There <strong>is</strong> + единственное число · There <strong>are</strong> + множественное</p>
        <ul>
          <li>There <em>is</em> a park near my house.</li>
          <li>There <em>are</em> 30 students in our class.</li>
          <li>Is there a bank here? — Yes, there is.</li>
        </ul>
        <p><strong>Отрицание:</strong> There isn't any milk. There aren't any chairs.</p>
      `,
      explain: "three books — множественное число → there are.",
      drills: ["a cat — единственное число → there is.", "many people — множественное → there are.", "Вопрос: Is there…?", "В отрицании → any.", "Рядом с моим домом есть парк."],
    },
    g1: {
      body: `
        <h2>Present Simple</h2>
        <p><strong>Когда:</strong> привычки, факты, расписание.</p>
        <p><strong>Формула:</strong> I/You/We/They + V1 · He/She/It + V1<strong>s</strong></p>
        <ul>
          <li>I <em>study</em> English every day.</li>
          <li>She <em>works</em> in Almaty.</li>
          <li>Do you like coffee? — Yes, I do.</li>
        </ul>
        <p><strong>Как часто:</strong> always, usually, often, sometimes, never</p>
      `,
      explain: "He/She/It + глагол + s → goes.",
      drills: ["He/She/It + V1 + s → drinks.", "you → Do…?", "He + doesn't + V1.", "We + V1 → have.", "Я каждый день учу английский.", "Она работает в Алматы."],
    },
    g20: {
      body: `
        <h2>Can / could</h2>
        <p><strong>Значение:</strong> <em>can</em> — «могу, умею», <em>could</em> — «мог, умел» в прошлом.</p>
        <p><strong>Формула:</strong> кто + <strong>can</strong> + V1. Во всех лицах одинаково: I can · she can (<s>she cans</s>).</p>
        <ul>
          <li>I <em>can</em> swim. She <em>can</em> speak three languages.</li>
          <li><strong>Отрицание:</strong> I <em>can't</em> drive.</li>
          <li><strong>Вопрос, просьба:</strong> <em>Can</em> you help me? <em>Can</em> I sit here?</li>
          <li><strong>Прошлое:</strong> When I was five, I <em>could</em> read.</li>
        </ul>
        <p><strong>Правило:</strong> после <em>can</em> не ставим <em>to</em>: <em>I can swim</em> (<s>I can to swim</s>).</p>
      `,
      explain: "Прошедшее время → could.",
      drills: ["can + V1, без -s.", "Просьба → Can you…?", "can't + V1.", "Прошедшее время → could.", "Я умею плавать.", "Он не умеет играть на гитаре."],
    },
    g21: {
      body: `
        <h2>Prepositions: in / on / at</h2>
        <p><strong>Значение:</strong> русским «в / на» в английском соответствуют три слова.</p>
        <p><strong>Время:</strong></p>
        <ul>
          <li><strong>at</strong> — точное время: <em>at 7 o'clock, at night</em></li>
          <li><strong>on</strong> — день: <em>on Monday, on 5 May, on my birthday</em></li>
          <li><strong>in</strong> — месяц, год, сезон, часть суток: <em>in May, in 2025, in winter, in the morning</em></li>
        </ul>
        <p><strong>Место:</strong></p>
        <ul>
          <li><strong>in</strong> — внутри: <em>in the room, in Almaty, in Kazakhstan</em></li>
          <li><strong>on</strong> — на поверхности: <em>on the table, on the wall</em></li>
          <li><strong>at</strong> — конкретная точка: <em>at the bus stop, at school, at home</em></li>
        </ul>
      `,
      explain: "Месяц → in May.",
      drills: ["Время на часах → at.", "День недели → on.", "На поверхности → on.", "Город, страна → in.", "Конкретная точка → at.", "Я работаю утром."],
    },
    g2: {
      body: `
        <h2>Present Continuous</h2>
        <p><strong>Когда:</strong> действие происходит прямо сейчас, временная ситуация.</p>
        <p><strong>Формула:</strong> am/is/are + V-ing</p>
        <ul>
          <li>I <em>am reading</em> now.</li>
          <li>They <em>are watching</em> a film.</li>
          <li>Is she working today?</li>
        </ul>
      `,
      explain: "Right now → Present Continuous: is cooking.",
      drills: ["Look! — прямо сейчас → is raining.", "now → am + V-ing.", "They + are + V-ing.", "you → are … doing?", "Я сейчас читаю книгу."],
    },
    g3: {
      body: `
        <h2>Past Simple</h2>
        <p><strong>Когда:</strong> законченное действие в прошлом (yesterday, last week, in 2020).</p>
        <p><strong>Формула:</strong> V2 (worked / went) · Did + V1?</p>
        <ul>
          <li>I <em>visited</em> my grandma yesterday.</li>
          <li>She <em>went</em> to Astana last month.</li>
          <li>Did you see that movie?</li>
        </ul>
      `,
      explain: "Yesterday → Past Simple: visited.",
      drills: ["go — неправильный глагол: go → went.", "yesterday → watched.", "Вопрос в прошедшем → Did…?", "didn't + V1 → know.", "Вчера я написал письмо другу."],
    },
    g23: {
      body: `
        <h2>Past Continuous</h2>
        <p><strong>Значение:</strong> действие, которое длилось в определённый момент в прошлом: «я смотрел, я читал (в тот момент)».</p>
        <p><strong>Формула:</strong> I/He/She/It <strong>was</strong> + V-ing · You/We/They <strong>were</strong> + V-ing</p>
        <ul>
          <li>At 8 pm I <em>was watching</em> TV.</li>
          <li>They <em>were playing</em> football when it started to rain.</li>
          <li><strong>Отрицание:</strong> She <em>wasn't sleeping</em>. <strong>Вопрос:</strong> What <em>were</em> you <em>doing</em>?</li>
        </ul>
        <p><strong>Правило:</strong> долгое действие — Past Continuous, короткое, которое его прервало, — Past Simple: <em>I was reading when you called.</em></p>
      `,
      explain: "I → was + V-ing.",
      drills: ["They → were + V-ing.", "was + V-ing.", "you → were.", "Короткое прерывающее действие → Past Simple.", "Вчера вечером я читал книгу."],
    },
    g4: {
      body: `
        <h2>Future: will / going to</h2>
        <ul>
          <li><strong>will</strong> — решение в момент речи, прогноз, обещание: I will help you.</li>
          <li><strong>going to</strong> — план / есть признаки: I am going to study tonight.</li>
        </ul>
      `,
      explain: "Есть признак (clouds) → going to.",
      drills: ["Признак виден → going to.", "Прогноз, мнение → will.", "План заранее → going to.", "Решение в момент речи → will.", "Я позвоню тебе завтра."],
    },
    g5: {
      body: `
        <h2>Articles</h2>
        <ul>
          <li><strong>a/an</strong> — впервые, «какой-то»: a book, an apple</li>
          <li><strong>the</strong> — известный / единственный: the sun, the teacher</li>
          <li>Иногда артикля нет: I like music. / Kazakhstan</li>
        </ul>
      `,
      explain: "interesting начинается с гласного звука → an.",
      drills: ["Перед гласным звуком → an.", "Единственный предмет → the.", "engineer — гласный звук → an.", "В общем значении артикль не нужен.", "Конкретная дверь → the."],
    },
    g22: {
      body: `
        <h2>Much / many / some / any</h2>
        <p><strong>Значение:</strong> в английском существительные бывают <em>исчисляемые</em> (an apple, two apples) и <em>неисчисляемые</em> (water, money, time).</p>
        <ul>
          <li><strong>many</strong> — исчисляемые: <em>many friends, How many books?</em></li>
          <li><strong>much</strong> — неисчисляемые: <em>much water, How much money?</em></li>
          <li><strong>some</strong> — в утверждении: <em>I have some apples. There is some milk.</em></li>
          <li><strong>any</strong> — в вопросе и отрицании: <em>Do you have any questions? I don't have any money.</em></li>
        </ul>
        <p><strong>Правило:</strong> <em>people, children</em> — исчисляемые: <em>many people</em>. <em>Water, sugar, information, advice</em> — неисчисляемые.</p>
      `,
      explain: "water — неисчисляемое → How much?",
      drills: ["Исчисляемое → many.", "time — неисчисляемое → much.", "Утверждение → some.", "Вопрос → any.", "people — исчисляемое → many.", "Мне нужно немного воды."],
    },
    g6: {
      body: `
        <h2>Compare</h2>
        <ul>
          <li>fast → faster → the fastest</li>
          <li>interesting → more interesting → the most interesting</li>
          <li>good → better → the best · bad → worse → the worst</li>
        </ul>
      `,
      explain: "Есть than → сравнительная степень: easier.",
      drills: ["Короткое прилагательное + -er → colder.", "good → better → the best.", "easy → easier.", "one of the + -est.", "Мой брат выше меня."],
    },
    g7: {
      body: `
        <h2>Present Perfect</h2>
        <p><strong>Формула:</strong> have/has + V3</p>
        <p><strong>Когда:</strong> прошлое связано с настоящим, опыт, just/already/yet/ever/never</p>
        <ul>
          <li>I <em>have finished</em> my homework.</li>
          <li>She <em>has never been</em> to London.</li>
        </ul>
      `,
      explain: "before / опыт → Present Perfect: have read.",
      drills: ["have + V3 → seen.", "She → has + V3.", "Have you ever been…?", "В конце отрицания → yet.", "Я уже сделал домашнее задание."],
    },
    g24: {
      body: `
        <h2>Used to</h2>
        <p><strong>Значение:</strong> привычка или ситуация в прошлом, которой сейчас нет: «раньше я …».</p>
        <p><strong>Формула:</strong> кто + <strong>used to</strong> + V1</p>
        <ul>
          <li>I <em>used to</em> live in Shymkent. (Сейчас живу в другом месте.)</li>
          <li>There <em>used to</em> be a cinema here.</li>
          <li><strong>Отрицание:</strong> I <em>didn't use to</em> like coffee.</li>
          <li><strong>Вопрос:</strong> <em>Did</em> you <em>use to</em> play football?</li>
        </ul>
        <p><strong>Правило:</strong> там, где есть <em>did</em>, пишем <em>use to</em> (без -d): <em>didn't use to, Did you use to…?</em></p>
      `,
      explain: "Ситуация в прошлом → used to + V1.",
      drills: ["Привычка в прошлом → used to + V1.", "В вопросе: Did … use to?", "Отрицание: didn't use to.", "There used to be…", "Раньше я не пил чай.", "Раньше она жила в Алматы."],
    },
    g8: {
      body: `
        <h2>Conditionals</h2>
        <ul>
          <li><strong>Zero:</strong> If + Present, Present — факт: If you heat ice, it melts.</li>
          <li><strong>First:</strong> If + Present, will + V1 — реальное будущее: If I study, I will pass.</li>
        </ul>
      `,
      explain: "First conditional → will stay.",
      drills: ["Zero conditional — факт → Present Simple.", "First conditional → will + V1.", "В части с if will не используется.", "if + Present Simple.", "Если у меня будет время, я тебе помогу."],
    },
    g9: {
      body: `
        <h2>Modals</h2>
        <ul>
          <li><strong>can</strong> — возможность / умение</li>
          <li><strong>must / have to</strong> — обязанность</li>
          <li><strong>should</strong> — совет</li>
          <li><strong>may / might</strong> — возможность (предположение)</li>
        </ul>
        <p>Модальный глагол + V1 (без to): You should <em>practice</em>.</p>
      `,
      explain: "Совет → should + V1.",
      drills: ["Запрет → mustn't.", "Просьба о разрешении → Can I…?", "Совет → should.", "Не обязательно → don't have to.", "Тебе нужно пить больше воды."],
    },
    g12: {
      body: `
        <h2>Phrasal verbs</h2>
        <ul>
          <li><strong>give up</strong> — сдаваться, бросать</li>
          <li><strong>look for</strong> — искать</li>
          <li><strong>turn on / off</strong> — включать / выключать</li>
          <li><strong>pick up</strong> — подбирать / быстро выучить (informal)</li>
          <li><strong>run out of</strong> — заканчиваться (о запасах)</li>
        </ul>
      `,
      explain: "give up = сдаваться.",
      drills: ["turn down = сделать тише.", "look up = найти в словаре.", "get up = вставать с постели.", "look after = присматривать, ухаживать.", "find out = узнать, выяснить."],
    },
    g10: {
      body: `
        <h2>Passive</h2>
        <p><strong>Формула:</strong> be + V3</p>
        <ul>
          <li>Active: They built the house.</li>
          <li>Passive: The house <em>was built</em>.</li>
          <li>English <em>is spoken</em> here.</li>
        </ul>
      `,
      explain: "Passive Present: is used.",
      drills: ["Страдательный залог: is + V3.", "Прошедшее время: was + V3.", "Множественное число: are + V3.", "Кто выполнил действие → by.", "Этот дом построен в 1990 году."],
    },
    g11: {
      body: `
        <h2>Linking words (essay/IELTS)</h2>
        <ul>
          <li>Addition: and, also, furthermore, in addition</li>
          <li>Contrast: but, however, although, while</li>
          <li>Result: so, therefore, as a result</li>
          <li>Example: for example, for instance</li>
        </ul>
      `,
      explain: "Противопоставление → however.",
      drills: ["Противопоставление → However.", "Причина → because.", "Although + предложение = «хотя…».", "Результат → Therefore.", "Despite + существительное."],
    },
    g16: {
      body: `
        <h2>Relative clauses</h2>
        <p><strong>Зачем:</strong> соединить два предложения и уточнить, о ком или о чём речь.</p>
        <p><strong>who</strong> — человек · <strong>which</strong> — предмет · <strong>that</strong> — оба · <strong>where</strong> — место · <strong>whose</strong> — чей</p>
        <ul>
          <li>The teacher <em>who</em> helped me is from Astana.</li>
          <li>The book <em>which</em> I bought is useful.</li>
          <li>This is the city <em>where</em> I was born.</li>
          <li>She is the student <em>whose</em> essay won.</li>
        </ul>
        <p><strong>Совет:</strong> в академическом письме помогает строить длинные связные предложения.</p>
      `,
      explain: "О человеке → who.",
      drills: ["Место → where.", "Предмет → which.", "Чей отец → whose.", "Люди → who.", "Учитель, который мне помог, из Астаны."],
    },
    g15: {
      body: `
        <h2>Second &amp; Third Conditional</h2>
        <p><strong>Second:</strong> нереальная ситуация в настоящем или будущем. <em>If + Past Simple, would + V1</em></p>
        <ul>
          <li>If I <em>had</em> more time, I <em>would travel</em> more.</li>
          <li>If I <em>were</em> you, I <em>would apply</em> to this university.</li>
        </ul>
        <p><strong>Third:</strong> то, что не случилось в прошлом, сожаление. <em>If + Past Perfect, would have + V3</em></p>
        <ul>
          <li>If she <em>had studied</em>, she <em>would have passed</em>.</li>
        </ul>
        <p><strong>Совет для IELTS:</strong> в Writing Task 2 second conditional для гипотез показывает разнообразие грамматики.</p>
      `,
      explain: "Second conditional: If + Past Simple → If I were…",
      drills: ["If I were you — устойчивая форма совета.", "Third conditional → would have + V3.", "Second conditional: if + Past Simple.", "Ситуация в прошлом → would have come.", "Если бы у меня было больше времени, я бы больше читал."],
    },
    g17: {
      body: `
        <h2>Reported speech</h2>
        <p><strong>Зачем:</strong> передать чужие слова косвенно. Время сдвигается на шаг назад.</p>
        <ul>
          <li>"I am tired." → She said (that) she <em>was</em> tired.</li>
          <li>"I will call you." → He said he <em>would</em> call me.</li>
          <li>"I have finished." → She said she <em>had finished</em>.</li>
        </ul>
        <p><strong>Вопрос:</strong> "Where do you live?" → He asked where I <em>lived</em>.</p>
        <p><strong>say vs tell:</strong> say (that)… · tell <em>someone</em> (that)…</p>
      `,
      explain: "Present Simple → Past Simple: liked.",
      drills: ["am → was.", "will → would.", "have lost → had lost.", "Вопрос тоже сдвигается назад: liked.", "tell + кому (told me); say + that."],
    },
    g18: {
      body: `
        <h2>Gerund (-ing) or infinitive (to + V1)</h2>
        <p>После одних глаголов идёт <strong>-ing</strong>, после других — <strong>to + V1</strong>.</p>
        <p><strong>-ing:</strong> enjoy, avoid, finish, mind, suggest, consider</p>
        <p><strong>to + V1:</strong> want, decide, hope, plan, agree, refuse</p>
        <ul>
          <li>I enjoy <em>reading</em>.</li>
          <li>She decided <em>to study</em> abroad.</li>
        </ul>
        <p><strong>Правило:</strong> после предлога всегда -ing: interested in <em>learning</em>.</p>
      `,
      explain: "enjoy + -ing → watching.",
      drills: ["decide + to + V1.", "mind + -ing.", "hope + to + V1.", "После предлога → -ing.", "avoid + -ing."],
    },
  };

  /* ---------- Phrases ---------- */
  const PHRASES = {
    p1: "По моему мнению,",
    p2: "Широко распространено мнение, что…",
    p3: "С одной стороны… С другой стороны…",
    p4: "Главная причина в том, что…",
    p5: "Например,",
    p6: "В результате / Поэтому,",
    p7: "Однако / Тем не менее,",
    p8: "Напротив,",
    p9: "Важное преимущество —…",
    p10: "Главный недостаток —…",
    p11: "Стоит отметить, что…",
    p12: "Подводя итог,",
    p13: "Я склонен согласиться, что…",
    p14: "Это может привести к…",
    p15: "С моей точки зрения,",
    p16: "Я имею в виду, что…",
    p17: "Хороший вопрос.",
    p18: "В долгосрочной перспективе,",
    p19: "Согласно недавним исследованиям,",
    p20: "В целом наблюдается рост.",
  };

  /* ---------- Story translations, line by line ---------- */
  const STORIES = {
    st1: [
      "Аружан открывает дверь. На пороге стоит мальчик.",
      "Привет! Я Данияр. Я живу в квартире 12.",
      "Привет, Данияр! Приятно познакомиться. Я Аружан.",
      "Это твоя кошка?",
      "Да, её зовут Мыш. Она очень добрая.",
      "Какая красивая! А у меня есть собака. Её зовут Барс.",
      "Будешь чай?",
      "Да, спасибо!",
    ],
    st2: [
      "Арман проголодался. Он заходит в маленькое кафе.",
      "Добрый день! Что желаете?",
      "Сэндвич с сыром и чашку чая, пожалуйста.",
      "Конечно. Чёрный или зелёный чай?",
      "Чёрный с молоком, пожалуйста.",
      "Пожалуйста. С вас 1800 тенге.",
      "Можно оплатить картой?",
      "Конечно. Приятного аппетита!",
    ],
    st3: [
      "Мадина впервые в Астане. Она не может найти свою гостиницу.",
      "Извините, вы не могли бы помочь? Я ищу гостиницу «Сарыарка».",
      "Конечно. Идите прямо по этой улице и у банка поверните налево.",
      "Это далеко отсюда?",
      "Нет, минут десять пешком. Или можно сесть на 10-й автобус.",
      "Пожалуй, пойду пешком. Сегодня хорошая погода.",
      "Правильное решение. Гостиница рядом с большим торговым центром. Не пропустите.",
      "Большое спасибо!",
      "Не за что. Хорошего отдыха в Астане!",
    ],
    st4: [
      "Сегодня суббота. Завтра у мамы день рождения, а у Алибека ещё нет подарка.",
      "Айгерим, что нам купить маме?",
      "Она любит цветы, но цветы — это скучно. Может, книгу?",
      "У неё и так очень много книг! В прошлом году мы подарили ей платок.",
      "Придумала! Давай приготовим ей ужин. Она ведь всегда готовит для нас.",
      "Отличная идея! Но я не умею готовить…",
      "Не волнуйся. Я сделаю бешбармак, а ты испечёшь торт. Посмотрим видео и сделаем.",
      "Договорились! Пойдём на базар и купим всё, что нужно.",
    ],
    st5: [
      "У Даны собеседование в туристической компании в Алматы.",
      "Доброе утро, Дана. Присаживайтесь. Почему вы хотите работать у нас?",
      "Я люблю путешествовать и говорю на трёх языках: казахском, русском и английском. Думаю, я смогу помогать вашим иностранным клиентам.",
      "Впечатляет. У вас есть опыт в туризме?",
      "Прошлым летом я работала гидом-волонтёром в Чарынском каньоне. Показывала туристам места и отвечала на их вопросы.",
      "Какая, по-вашему, ваша главная слабость?",
      "Иногда я трачу слишком много времени на мелочи. Но я учусь лучше управлять временем: каждое утро составляю план.",
      "Хороший ответ. Мы свяжемся с вами до пятницы.",
    ],
    st6: [
      "Ерлан проснулся с больным горлом и температурой. Он звонит в поликлинику.",
      "Городская поликлиника, доброе утро. Чем могу помочь?",
      "Здравствуйте, я хотел бы записаться на приём. Со вчерашнего дня болит горло, а теперь ещё и температура.",
      "Сочувствую. Доктор Аманова свободна сегодня в 11:30. Вам удобно?",
      "Да, отлично. Нужно что-нибудь взять с собой?",
      "Возьмите удостоверение личности. Если температура поднимется выше 39 градусов, вызовите скорую.",
      "Спасибо. Можно приехать на автобусе или лучше на такси?",
      "Если чувствуете слабость, лучше на такси. Пейте много тёплой воды. До встречи.",
    ],
    st7: [
      "На уроке английского в Шымкенте ученики спорят, нужно ли запретить смартфоны в школе.",
      "Асель, ты за запрет. Начинай.",
      "Смартфоны отвлекают учеников. Исследования показывают, что результаты тестов улучшаются, когда телефоны на уроках запрещены.",
      "Но полный запрет нереален. Телефон — полезный инструмент для учёбы: мы каждый день пользуемся словарями и учебными приложениями.",
      "Верно, но сколько учеников на самом деле используют телефон на уроке для учёбы? Большинство сидят в соцсетях.",
      "Тогда решение — не запрет, а умение пользоваться телефоном ответственно. Иначе мы не готовим учеников к реальной жизни.",
      "У вас обоих сильные аргументы. Есть ли компромисс?",
      "Может быть, телефоны будут лежать в шкафу, а учитель будет разрешать их только для конкретных заданий.",
      "Если правила будут понятными, с этим можно согласиться.",
    ],
    st8: [
      "Двое друзей, Тимур и Жанна, обсуждают бизнес-идею в кофейне в Алматы.",
      "Я думаю о приложении, которое напрямую связывает фермеров с ресторанами в городе.",
      "Интересно. То есть рестораны покупают свежие продукты без посредников?",
      "Именно. Фермеры зарабатывают больше, рестораны платят меньше. Выигрывают все.",
      "Звучит многообещающе, но ты подумал о доставке? Свежие продукты нужно привозить быстро, особенно летом.",
      "Это самое сложное. Можно начать с нескольких ферм за городом и использовать машины с холодильником.",
      "А как ты убедишь фермеров пользоваться приложением? Многие предпочитают говорить по телефону.",
      "Хороший вопрос. Может быть, первая версия должна работать через простой чат-бот на казахском и русском.",
      "Вот в это я бы вложила деньги. Давай напишем бизнес-план в эти выходные.",
    ],
  };

  /* ---------- Vocabulary quiz: options and explanations ---------- */
  const QUIZ_VOCAB = [
    { options: ["выходной", "срок", "офис", "проект"], exp: "deadline = срок." },
    { options: ["забывать", "улучшать", "покупать", "опаздывать"], exp: "improve = улучшать." },
    null,
    { exp: "luggage = багаж." },
    { options: ["учитель", "клиент", "коллега", "пассажир"], exp: "customer = клиент." },
    { options: ["пример", "противопоставление", "время", "место"], exp: "although = contrast (противопоставление)." },
    { options: ["ответственный", "счастливый", "голодный", "уставший"], exp: "responsible = ответственный." },
    { options: ["прятать", "рекомендовать", "ломать", "сравнивать"], exp: "recommend = рекомендовать." },
    null,
    { options: ["начинать", "сдаваться, бросать", "находить", "ждать"], exp: "give up = quit (бросить)." },
  ];

  /* ---------- Writing tips written in Kazakh ---------- */
  const TIPS = {
    w6: ["My name is … I am … years old.", "I live in … with my …", "I like … / I don't like …", "Пиши короткие предложения: одна мысль в каждом."],
    w7: ["Past Simple: I went, I saw, I played…", "On Saturday… / On Sunday…", "Связывай предложения: and, but, then, after that."],
    w8: ["Hi …! / Dear …,", "I'm having a party on … at …", "We will … / Can you come?", "В конце: See you soon! / Best wishes,"],
  };

  const ru = new Map(
    WORDS.trim()
      .split("\n")
      .map((line) => {
        const i = line.indexOf("=");
        return [line.slice(0, i), line.slice(i + 1)];
      })
  );
  D.vocab.forEach((w) => {
    if (ru.has(w.en)) w.ru = ru.get(w.en);
  });

  D.lessons.forEach((l) => {
    const r = LESSONS[l.id];
    if (!r) return;
    l.bodyRu = r.body;
    if (l.practice) l.practice.explainRu = r.explain;
    (l.drills || []).forEach((d, i) => {
      if (r.drills[i] == null) return;
      if (d.type === "build") d.ru = r.drills[i];
      else d.expRu = r.drills[i];
    });
  });

  (D.phrases || []).forEach((p) => {
    if (PHRASES[p.id]) p.ru = PHRASES[p.id];
  });

  (D.stories || []).forEach((s) => {
    const r = STORIES[s.id];
    if (r) s.lines.forEach((line, i) => r[i] && (line[3] = r[i]));
  });

  (D.quizBanks.vocab || []).forEach((q, i) => {
    const r = QUIZ_VOCAB[i];
    if (!r) return;
    if (r.options) q.optionsRu = r.options;
    if (r.exp) q.expRu = r.exp;
  });

  (D.writing || []).forEach((w) => {
    if (TIPS[w.id]) w.tipsRu = TIPS[w.id];
  });
})();
