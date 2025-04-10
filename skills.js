const skills = {
    "miecze": { "id": 0, "gp": 30, "koszt": 100, "long": "walce mieczem" },
    "szable": { "id": 1, "gp": 30, "koszt": 100, "long": "walce szabla" },
    "sztylety": { "id": 2, "gp": 30, "koszt": 70, "long": "walce sztyletem" },
    "topory": { "id": 3, "gp": 30, "koszt": 100, "long": "walce toporem" },
    "znajomosc jezykow": { "id": 132, "gp": 40, "koszt": 50, "long": "identyfikacji starozytnych i wspolczesnych jezykow i pism" },
    "maczugi": { "id": 4, "gp": 30, "koszt": 100, "long": "walce maczuga" },
    "mloty": { "id": 5, "gp": 30, "koszt": 100, "long": "walce mlotem" },
    "bronie drzewcowe": { "id": 6, "gp": 30, "koszt": 100, "long": "walce bronia drzewcowa" },
    "wlocznie": { "id": 7, "gp": 30, "koszt": 100, "long": "walce wlocznia" },
    "bicze": { "id": 9, "gp": 30, "koszt": 40, "long": "walce biczem" },
    "zielarstwo": { "id": 330, "gp": 100, "koszt": 70, "long": "znajdowaniu i rozpoznawaniu ziol" },
    "bronie lancuchowe": { "id": 10, "gp": 30, "koszt": 100, "long": "walce bronmi lanuchowymi" },
    "alchemia": { "id": 331, "gp": 100, "koszt": 70, "long": "warzeniu i rozpoznawaniu mikstur" },
    "luki": { "id": 11, "gp": 30, "koszt": 70, "long": "poslugiwaniu sie lukami" },
    "skradanie sie": { "id": 204, "gp": 30, "koszt": 70, "long": "przemykaniu sie ukradkiem" },
    "przemiana": { "id": 332, "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia przemiany" },
    "kusze": { "id": 12, "gp": 30, "koszt": 70, "long": "poslugiwaniu sie kuszami" },
    "ukrywanie sie": { "id": 205, "gp": 30, "koszt": 70, "long": "ukrywaniu siebie i przedmiotow" },
    "iluzja": { "id": 333, "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia iluzji" },
    "mistycyzm": { "id": 334, "gp": 30, "koszt": 100, "long": "mistycyzmie" },
    "wyczucie slabosci": { "id": 207, "gp": 20, "koszt": 200, "long": "wyczuwaniu slabosci wroga" },
    "zaklinanie": { "id": 335, "gp": 30, "koszt": 100, "long": "zaklinaniu" },
    "przywolywanie": { "id": 336, "gp": 30, "koszt": 100, "long": "magii tworzenia i przywolywania" },
    "rozpraszanie": { "id": 337, "gp": 30, "koszt": 100, "long": "rozpraszaniu zaklec" },
    "walka dwiema bronmi": { "id": 20, "gp": 20, "koszt": 100, "long": "walce dwiema bronmi jednoczesnie" },
    "walka bez broni": { "id": 21, "gp": 30, "koszt": 50, "long": "walce bez broni" },
    "walka w ciemnosci": { "id": 22, "gp": 20, "koszt": 50, "long": "walce w ciemnosciach" },
    "parowanie": { "id": 23, "gp": 20, "koszt": 100, "long": "parowaniu ciosow przeciwnika" },
    "uniki": { "id": 24, "gp": 20, "koszt": 100, "long": "unikaniu ciosow przeciwnika" },
    "walka konna": { "id": 25, "gp": 30, "koszt": 70, "long": "walce z konskiego grzbietu" },
    "tarczownictwo": { "id": 26, "gp": 20, "koszt": 100, "long": "skutecznym uzywaniu tarczy" },
    "ogluszanie": { "id": 29, "gp": 20, "koszt": 50, "long": "ogluszaniu przeciwnikow" },
    "zdolnosci przywodcze": { "id": 30, "gp": 30, "koszt": 130, "long": "wywieraniu wplywu na innych" },
    "walka w szyku": { "id": 31, "gp": 30, "koszt": 80, "long": "walce w szyku" },
    "ocena przeciwnika": { "id": 100, "gp": 30, "koszt": 50, "long": "ocenianiu cech i stanow osob" },
    "ocena obiektu": { "id": 101, "gp": 30, "koszt": 50, "long": "ocenianiu wlasnosci przedmiotow" },
    "szacowanie": { "id": 102, "gp": 30, "koszt": 50, "long": "szacowaniu wartosci przedmiotow" },
    "plywanie": { "id": 103, "gp": 50, "koszt": 50, "long": "plywaniu i nurkowaniu" },
    "wspinaczka": { "id": 104, "gp": 50, "koszt": 50, "long": "wspinaniu sie" },
    "opieka nad zwierzetami": { "id": 105, "gp": 30, "koszt": 50, "long": "opiekowaniu sie zwierzetami i wzbudzaniu ich zaufania" },
    "wyczucie kierunku": { "id": 106, "gp": 30, "koszt": 50, "long": "rozpoznawaniu kierunkow i znajdowaniu sciezek" },
    "tropienie": { "id": 107, "gp": 30, "koszt": 60, "long": "znajdowaniu i rozpoznawaniu sladow" },
    "lowiectwo": { "id": 108, "gp": 100, "koszt": 50, "long": "lowieniu dzikich zwierzat" },
    "magia ognia": { "id": 300, "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia ognia" },
    "spostrzegawczosc": { "id": 109, "gp": 50, "koszt": 60, "long": "zauwazaniu tego, co ukryte" },
    "magia powietrza": { "id": 301, "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia powietrza" },
    "targowanie sie": { "id": 110, "gp": 30, "koszt": 100, "long": "zawieraniu korzystnych transakcji handlowych" },
    "magia ziemi": { "id": 302, "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia ziemi" },
    "jezdziectwo": { "id": 111, "gp": 35, "koszt": 55, "long": "jezdzie konnej" },
    "magia wody": { "id": 303, "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia wody" },
    "gornictwo": { "id": 112, "gp": 100, "koszt": 90, "long": "wydobywaniu mineralow spod ziemi" },
    "magia zycia": { "id": 304, "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia zycia" },
    "magia mroku": { "id": 305, "gp": 30, "koszt": 100, "long": "poslugiwaniu sie magia mroku" },
    "metalurgia": { "id": 114, "gp": 100, "koszt": 60, "long": "metalurgii" },
    "zestrojenie ze slowami runicznymi": { "id": 116, "gp": 100, "koszt": 100, "long": "zestrojeniu ze slowami runicznymi" },
    "koncentracja": { "id": 310, "gp": 30, "koszt": 100, "long": "koncentrowaniu swoich magicznych zdolnosci" },
    "koncentracja w walce": { "id": 311, "gp": 20, "koszt": 100, "long": "koncentrowaniu swoich magicznych zdolnosci podczas walki" },
    "magia runiczna": { "id": 312, "gp": 30, "koszt": 70, "long": "pisaniu i uzywaniu run" },
    "czarodziejstwo": { "id": 313, "gp": 30, "koszt": 70, "long": "znajomosci i uzywaniu magii" },
}
