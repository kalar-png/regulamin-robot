let background8, background9;
let acceptButton;
let rulesDiv;
let images = [];
let selected = [];

const imgSize = 70 * 4;
const spacing = 10 * 4;
let showMessage = false;


let screenState = 0;

function preload() {
  background8 = loadImage('background8.png');
  background9 = loadImage('background9.png');
  for (let i = 0; i < 9; i++) {
    images[i] = loadImage(`img${i}.png`);
    selected[i] = false;
  }
}

function setup() {
  createCanvas(2388, 1688); 
  textFont('Arial');

  if (screenState === 0) {
    setupRulesScreen();
  }
}

function setupRulesScreen() {
  rulesDiv = createDiv(`Akceptując regulamin zwrotu, zgadzasz się na wzięcie odpowiedzialności za wytworzenie dodatkowego śladu węglowego, generowanego przez ciężarówki dostawcze, które ponownie będą musiały pokonać trasę do twojego domu i odebrać paczkę w celu zwrotu. W związku z tym możesz przyczynić się do szybszego wymierania takich gatunków, jak: drop (Otis tarda), jaszczurka zielona (Lacerta viridis), jesiotr zachodni (Acipenser sturio), sęp płowy (Gyps fulvus), tarpan (Equus gmelini), tur (Bos primigenius), kozica (Rupicapra), głuszec (Tetraourogallus), sokół wędrowny (Falco peregrinus), wąż Eskulapa (Zamenis longissimus), łosoś (Salmo salar), skójka perłorodna (Margaritifera margaritifera), skrzelopływka bagienna (Branchinecta paludosa), mrówkolew drzewny (Dendroleon pantherinus), pilnicznik fiołkowy (Limoniscus violaceus), goździk łysy (Dianthus collinus), czosnek sztywny (Allium strictum), kosaciec trawolistny (Iris graminea), sasanka zwyczajna (Pulsatilla vulgaris), aldrowanda pęcherzykowata (Aldrovanda vesiculosa), miłek szkarłatny (Adonis flammea), storczyk błotny (Orchis palustris), świstak (Marmota), żbik (Felis silvestris), batalion (Calidris pugnax), podgorzałka (Aythya nyroca), minóg morski (Petromyzon marinus), nadobnica alpejska (Rosalia alpina), biegacz Fabrycjusza (Carabus fabricii), bogatek wspaniały (Buprestis splendens), elisma wodna (Luronium natans), gnidosz sudecki (Pedicularis sudetica), jarząb szwedzki (Sorbus intermedia), ponikło wielołodygowe (Eleocharis multicaulis), gniewosz plamisty (Coronella austriaca), sowa błotna (Asio flammeus), rybołów (Pandion haliaetus), piekielnica (Alburnoides bipunctatus), rak szlachetny (Astacus astacus), kozioróg dębosz (Cerambyx cerdo), pijawka lekarska (Hirudo medicinalis), arnika górska (Arnica montana), grążel żółty (Nuphar lutea), obuwik pospolity (Cypripedium calceolus), poryblin jeziorny (Isoëtes lacustris), ryś (Lynx), wilk (Canis), kania ruda (Milvus milvus), traszka grzebieniasta (Triturus cristatus), różanka (Rhodeus sericeus), morświn (Phocoena), darniówka tatrzańska (Microtus tatricus), bielik (Haliaeetus albicilla), sóweczka (Glaucidium passerinum), traszka karpacka (Lissotriton montandoni), mrówka żniwiarka (Messor barbarus), ślimak żółtawy (Helix lutescens), niedźwiedziówka krasa (Pericallia matronula), piewik bagienny (Aphrophora major), grzybień północny (Nymphaea candida), tocja alpejska (Tozzia carpathica), zarzyczka górska (Primula matthioli), dzwonek szczeciniasty (Campanula cervicaria), wiechlina tatrzańska (Poa nobilis).
Co więcej spaliny zanieczyszczające powietrze i generowane przez ciężarówki odbierające TWOJĄ paczkę do zwrotu przyczyniają się do wielu negatywnych zjawisk takich, jak: Wzrost średniej temperatury Ziemi,topnienie lodowców i czap lodowych (Arktyka, Antarktyda, Himalaje),podnoszenie się poziomu mórz i oceanów, zanik lodu morskiego na Oceanie Arktycznym, osłabienie prądów morskich (np. Prąd Zatokowy – Gulf Stream), częstsze i silniejsze zjawiska El Niño i La Niña, zakwaszanie oceanów, zmniejszenie albedo Ziemi (mniej odbijanego światła przez lód → jeszcze większe ocieplenie), wzrost liczby fal upałów, wzrost liczby i siły huraganów, cyklonów i tajfunów, częstsze susze i pustynnienie terenów, wzrost liczby pożarów lasów (np. Australia, Kalifornia, Amazonia), intensywniejsze opady i powodzie, nagłe zmiany pogody i anomalia klimatyczne, wymieranie gatunków (lądowych, morskich, słodkowodnych), przesuwanie się stref 
klimatycznych, zakłócenie migracji zwierząt, zaburzenie cykli rozrodczych i żywieniowych wielu gatunków, masowe bielenie raf koralowych (np. Wielka Rafa Koralowa), rozprzestrzenianie się inwazyjnych gatunków roślin i zwierząt, ubożenie bioróżnorodności, zakłócenie sieci pokarmowych, spadek plonów w wielu regionach, zaburzenia w sezonach wegetacyjnych, większa liczba szkodników i chorób roślin, zmiany dostępności wody dla upraw, ryzyko głodu i niedożywienia w krajach rozwijających się, zmniejszenie dostępu do wody pitnej (np. przez topnienie lodowców, zmniejszenie opadów, zanieczyszczenie wód w wyniku powodzi i susz, konflikty o wodę w regionach suchych, przesolenie wód gruntowych w obszarach nadmorskich, więcej zgonów związanych z falami upałów, zwiększenie zachorowań na choroby przenoszone przez komary (np. malaria, denga), zanieczyszczenie powietrza → choroby układu oddechowego, więcej alergii (np. przez dłuższy okres pylenia), problemy psychiczne związane z katastrofami klimatycznymi (stres, lęk klimatyczny), zwiększenie zagrożenia chorobami przenoszonymi przez wodę (np. cholera), wzrost liczby uchodźców klimatycznych, zniszczenie infrastruktury przez klęski żywiołowe, spadek wartości nieruchomości w regionach zagrożonych (np. nadmorskie miasta), wzrost kosztów ubezpieczeń i strat gospodarczych, zmniejszenie wydajności pracy (zwłaszcza w rolnictwie i budownictwie), nasilenie konfliktów zbrojnych o zasoby (woda, ziemia, jedzenie), destabilizacja państw dotkniętych katastrofami, konieczność międzynarodowej współpracy i napięcia między krajami, zmiana priorytetów polityki energetycznej i środowiskowej, presja społeczna na rządy i korporacje (protesty klimatyczne, np. Fridays for Future)
Dodatkowo zmarnujesz cenny czas pracowników Zoolando, którzy będą musieli na nowo przyjrzeć się zamówionemu wcześniej przez ciebie produktowi. Wiesz co to może dla nich oznaczać?Frustracja i zniechęcenie – poczucie bezsensu wykonywanej pracy. Wypalenie zawodowe – szczególnie gdy czas jest marnowany na nieproduktywne zadania.Obniżenie zaangażowania – pracownicy przestają się starać. Zaburzenie work-life balance – nadrabianie obowiązków po godzinach. Brak satysfakcji z pracy – brak poczucia sensu i osiągnięć. Zmniejszona kreatywność i innowacyjność – czas marnowany zamiast wykorzystywany twórczo. Zwiększona rotacja pracowników – odejścia do lepiej zarządzanych firm. Zbyt wiele niepotrzebnych spotkań – tzw. „meetingomania”. Niejasne cele i role – ludzie nie wiedzą, co mają robić. Brak priorytetów i planowania – działania „na oślep”. Zła komunikacja – wielokrotne powtarzanie informacji, niedomówienia. Duplikowanie pracy – kilka osób robi to samo nieświadomie. Zbyt złożone procedury – biurokracja zabiera czas zamiast go oszczędzać. Zmarnowane pieniądze na pensje za nieefektywną pracę. Zwiększone koszty projektów i usług. Niewykorzystane szanse biznesowe. Utrata przychodów przez opóźnienia w dostawach/produktach. Potencjalne kary umowne za nieterminowość. Zła reputacja firmy jako pracodawcy – trudność w rekrutacji talentów. Brak rozwoju i innowacji – organizacja „drepcze w miejscu”. Zagrożenie utratą klientów – przez niższą jakość usług lub produktów. Zahamowanie wzrostu – firma nie osiąga swojego potencjału.
Bierz odpowiedzialność za swoje czyny!
 
`); 
  rulesDiv.position(30 * 4, 135 * 4);
  rulesDiv.size(500 * 4, 190 * 4);
  rulesDiv.style('overflow-y', 'scroll');
  rulesDiv.style('background', 'white');
  rulesDiv.style('padding', 15 * 4 + 'px');
  rulesDiv.style('font-family', '"Helvetica Neue", sans-serif');
  rulesDiv.style('font-size', 8 * 4 + 'px');

  acceptButton = createButton('Akceptuj regulamin');
  acceptButton.position(width - 90 * 4, height - 50 * 4);
  acceptButton.mousePressed(() => {
    screenState = 1;
    cleanupRulesScreen();
  });

  acceptButton.style('background-color', 'black');
  acceptButton.style('color', 'white');
  acceptButton.style('border', 'none');

  acceptButton.style('font-family', '"Helvetica Neue", sans-serif');
  acceptButton.style('font-size', '20px'); 
acceptButton.style('width', '180px');    // nowa linia


  acceptButton.mouseOver(() => acceptButton.style('color', '#ffc0cb'));
  acceptButton.mouseOut(() => acceptButton.style('color', 'white'));
}

function cleanupRulesScreen() {
  rulesDiv.remove();
  acceptButton.remove();
}

function draw() {
  if (screenState === 0) {
    image(background8, 0, 0, width, height);
  } else if (screenState === 1) {
    image(background9, 0, 0, width, height);
    drawInfoBox();
    drawImageGrid();
    drawVerifyButtonOrMessage();
  }
}

function drawInfoBox() {
  let rectWidth = 230 * 4;
  let rectHeight = 80 * 4;
  let rectX = width / 2 - rectWidth / 2;
  let rectY = height / 7;

  fill(0, 102, 181);
  noStroke();
  rect(rectX, rectY, rectWidth, rectHeight);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(10 * 4);
  text("Wybierz wszystkie obrazy, na których jest:", width / 2, rectY + 20 * 4);
  textSize(18 * 4);
  text("Autobus", width / 2, rectY + 45 * 4);
  textSize(10 * 4);
  text("Gdy wybierzesz wszystkie, kliknij Weryfikuj", width / 2, rectY + 70 * 4);
}

function drawImageGrid() {
  let gridSize = 3;
  let startX = width / 2 - (gridSize * imgSize + (gridSize - 1) * spacing) / 2;
  let startY = height / 3;

  for (let i = 0; i < 9; i++) {
    let x = startX + (i % 3) * (imgSize + spacing);
    let y = startY + floor(i / 3) * (imgSize + spacing);

    image(images[i], x, y, imgSize, imgSize);

    if (selected[i]) {
      fill(0, 0, 255, 100);
      noStroke();
      rect(x, y, imgSize, imgSize);
    }
  }
}

function drawVerifyButtonOrMessage() {
  let gridSize = 3;
  let startX = width / 2 - (gridSize * imgSize + (gridSize - 1) * spacing) / 2;
  let startY = height / 3;

  let xRight = startX + 2 * (imgSize + spacing);
  let yBottom = startY + 2 * (imgSize + spacing);

  let btnWidth = 70 * 4;
  let btnHeight = 20 * 4;

  let x = xRight;
  let y = yBottom + imgSize + 10 * 4;

  if (showMessage) {
    fill(255, 0, 0);
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(12 * 4);
    text("Jesteś robotem,\nnie udało się dokonać zwrotu", x, y + btnHeight / 2);
  } else {
    fill(0, 102, 181);
    stroke(255);
    strokeWeight(1);
    rect(x, y, btnWidth, btnHeight);

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(10 * 4);
    text("Weryfikuj", x + btnWidth / 2, y + btnHeight / 2);
  }
}

function mousePressed() {
  if (screenState !== 1) return;

  let gridSize = 3;
  let startX = width / 2 - (gridSize * imgSize + (gridSize - 1) * spacing) / 2;
  let startY = height / 3;

  for (let i = 0; i < 9; i++) {
    let x = startX + (i % 3) * (imgSize + spacing);
    let y = startY + floor(i / 3) * (imgSize + spacing);

    if (mouseX >= x && mouseX <= x + imgSize &&
        mouseY >= y && mouseY <= y + imgSize) {
      selected[i] = !selected[i];
    }
  }

  let xRight = startX + 2 * (imgSize + spacing);
  let yBottom = startY + 2 * (imgSize + spacing);
  let x = xRight;
  let y = yBottom + imgSize + 10 * 4;
  let btnWidth = 70 * 4;
  let btnHeight = 20 * 4;

  if (!showMessage &&
      mouseX >= x && mouseX <= x + btnWidth &&
      mouseY >= y && mouseY <= y + btnHeight) {
    showMessage = true;
  }
}