//interface - generic

interface Developer<T,K=null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: T;
    bike?:K
}


type SmartWatchType1 = {
     name: string;
  model: string;
}

const poorDeveloper: Developer<SmartWatchType1> = {
    name: "Mohsin Kabir",
    computer: {
        brand: "AUSUS",
        model:"AU01",
        releaseYear:2022
    },
    smartWatch: {
        name:"AB",
        model:"A01"
    },
   
}


type SmartWatchType = {
     name: string;
  model: string;
  heartTrack: boolean;
}

type BikeType = {
    name: string;
    model: string
}

const richDeveloper: Developer<SmartWatchType, BikeType> = {
  name: "Mohsin Kabir",
  computer: {
    brand: "ASUS",
    model: "AU01",
    releaseYear: 2022,
  },
  smartWatch: {
    name: "AB",
    model: "A01",
    heartTrack: true,
  },
   bike:{
        name:"Yamaha",
        model:"Y1"
    }
};