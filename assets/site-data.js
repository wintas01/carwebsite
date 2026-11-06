/* Motiv — shared site data.
   The public site (index.html) and the admin panel (admin.html) both read from here.
   DEFAULTS live in this file. Changes saved in the admin panel are stored in this
   browser (localStorage) and override the defaults — preview only, until a real
   database is connected. */
(function(){
const KEY='motiv-admin-v1';
const BRANDS=[["Toyota","toyota"],["Lexus","lexus"],["Mercedes-Benz","mercedes"],["BMW","bmw"],["Honda","honda"],["Audi","audi"],["Land Rover","landrover"],["Volkswagen","volkswagen"],["Ford","ford"],["Hyundai","hyundai"],["Kia","kia"],["Nissan","nissan"],["Porsche","porsche"],["Jeep","jeep"],["Peugeot","peugeot"],["Tesla","tesla"],["Mazda","mazda"],["Volvo","volvo"],["Rolls-Royce","rollsroyce"],["Lamborghini","lamborghini"]];
const SETTINGS={
 brand:'Motiv',ownerName:'Motiv',
 phone:'+2348000000000',phoneLabel:'+234 800 000 0000',whatsapp:'2348000000000',
 email:'hello@motiv.example',address:'Lagos, Nigeria',hours:'Mon–Sat · 9am–7pm',
 replyTime:'Usually replies within an hour',
 instagram:'',tiktok:'',
 tagline:'HAND-PICKED CARS · PERSONALLY INSPECTED',
 heroEyebrow:'A smarter way to move',
 heroTitle:'Find the car that feels like',heroAccent:'yours.',
 heroText:'Good cars. Clear prices. No middlemen. Every car here is personally sourced and inspected by me before it’s listed — so you deal with one person, start to finish.',
 heroTag:'BMW 5 Series',
 stat1:'150+',stat1Label:'CARS DELIVERED',stat2:'100%',stat2Label:'PERSONALLY INSPECTED',stat3:'1-on-1',stat3Label:'DIRECT ON WHATSAPP',
 sellerSold:'150+',sellerYears:'6 yrs',sellerRating:'4.9★',
 negotiable:'Slightly negotiable',
 showSell:true,showCompare:true,showSold:true,
 brands:BRANDS.map(b=>b[0])
};
const U=id=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;
const VEHICLES=[
{id:1,make:'BMW',model:'X5 xDrive40i',year:2022,price:48500000,body:'SUV',mileage:'28,400 km',fuel:'Petrol',trans:'Automatic',engine:'3.0L Turbo I6',drive:'AWD',condition:'Foreign used',duty:'Cleared',location:'Lagos',tag:'Featured',img:U('photo-1555215695-3004980ad54e'),
 desc:'Clean, accident-free X5 with full service history. Drives tight and quiet, no warning lights. Panoramic roof, ventilated seats and the M Sport package. Duty fully cleared — ready to register.',feats:['M Sport package','Panoramic roof','360° camera','Heated & cooled seats','Apple CarPlay','Keyless entry']},
{id:2,make:'Mercedes-Benz',model:'C300 AMG Line',year:2021,price:32750000,body:'Sedan',mileage:'35,100 km',fuel:'Petrol',trans:'Automatic',engine:'2.0L Turbo I4',drive:'RWD',condition:'Foreign used',duty:'Cleared',location:'Lagos',tag:'Popular',img:U('photo-1618843479313-40f8afb4b4d8'),
 desc:'Sharp C300 in AMG Line trim. Original paint, no repaint history, interior like new. Perfect daily driver with plenty of tech.',feats:['AMG Line styling','Burmester sound','Ambient lighting','Blind-spot assist','Reverse camera']},
{id:3,make:'Toyota',model:'Land Cruiser Prado',year:2020,price:39500000,body:'SUV',mileage:'51,000 km',fuel:'Petrol',trans:'Automatic',engine:'4.0L V6',drive:'4WD',condition:'Nigerian used',duty:'Cleared',location:'Lagos',tag:'Well kept',img:U('photo-1519641471654-76ce0107ad1b'),
 desc:'One owner since new, serviced at Toyota. Strong engine and gearbox, chilling AC, 7 seats. Tough enough for any road in Nigeria.',feats:['7 seats','Off-road modes','Sunroof','Leather seats','Rear AC']},
{id:4,make:'Lexus',model:'RX 350 F Sport',year:2022,price:44200000,body:'SUV',mileage:'22,600 km',fuel:'Petrol',trans:'Automatic',engine:'3.5L V6',drive:'AWD',condition:'Foreign used',duty:'Cleared',location:'Lagos',tag:'Premium pick',img:U('photo-1606664515524-ed2f786a0bd6'),
 desc:'Low-mileage RX 350 F Sport. Smooth V6, adaptive suspension and Mark Levinson audio. Bought clean, inspected and road-tested by me.',feats:['F Sport suspension','Mark Levinson audio','Heads-up display','Wireless charging','Lane keep assist']},
{id:5,make:'Honda',model:'Accord Touring',year:2019,price:16800000,body:'Sedan',mileage:'68,200 km',fuel:'Petrol',trans:'Automatic',engine:'2.0L Turbo I4',drive:'FWD',condition:'Nigerian used',duty:'Cleared',location:'Lagos',tag:'Great value',img:U('photo-1594070319944-7c0cbebb6e9a'),
 desc:'Fuel-efficient, reliable and spacious. Touring is the top trim, so it is fully loaded. Tyres are new and the last service was done last month.',feats:['Top Touring trim','Heated seats','Head-up display','Adaptive cruise','New tyres']},
{id:6,make:'Audi',model:'A5 Sportback',year:2021,price:28900000,body:'Coupe',mileage:'39,700 km',fuel:'Petrol',trans:'Automatic',engine:'2.0L TFSI',drive:'AWD',condition:'Foreign used',duty:'Cleared',location:'Lagos',tag:'Editor’s choice',img:U('photo-1603584173870-7f23f760c9a2'),
 desc:'Stylish four-door coupe with quattro all-wheel drive. Virtual cockpit, sporty and comfortable, and clean inside and out.',feats:['quattro AWD','Virtual cockpit','S line package','LED Matrix lights','Bang & Olufsen audio']}
];
VEHICLES.forEach((v,i)=>{v.imgs=v.imgs||[v.img];v.status=v.status||'Available';v.featured=v.featured??(i===0);v.added=v.added||'2026-11-0'+(i+1)});
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
const saved=load();
const settings=Object.assign({},SETTINGS,saved.settings||{});
const vehicles=(saved.vehicles||VEHICLES).map(v=>Object.assign({status:'Available',featured:false},v,{imgs:(v.imgs&&v.imgs.length?v.imgs:[v.img]).filter(Boolean),img:(v.imgs&&v.imgs[0])||v.img}));
window.MOTIV={KEY,BRANDS,DEFAULT_SETTINGS:SETTINGS,DEFAULT_VEHICLES:VEHICLES,settings,vehicles,
 save(data){const cur=load();const next=Object.assign(cur,data);localStorage.setItem(KEY,JSON.stringify(next))},
 reset(){try{localStorage.removeItem(KEY)}catch(e){}},
 hasChanges(){return !!(saved.settings||saved.vehicles)}};
})();
