import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./page1.css";

const Page1 = () => {
  const [routes, setRoutes] = useState({});

  useEffect(() => {
    const pointArr = [
      {
        name: "route1",
        start: [18.73992692, 98.95715643],
        end: [18.7447606, 98.94150676],
      },
      {
        name: "route2",
        start: [18.7394052, 98.9569539],
        end: [18.74182773, 98.96186154],
      },
      {
        name: "route3",
        start: [18.74161879, 98.97114786],
        end: [18.74547287, 98.97960358],
      },
      {
        name: "route4",
        start: [18.74369571, 98.95863794],
        end: [18.74760541, 98.95011214],
      },
      {
        name: "route5",
        start: [18.74348781, 98.95960351],
        end: [18.75104082, 98.96481341],
      },
      {
        name: "route6",
        start: [18.75856243, 98.97007353],
        end: [18.76609868, 98.97531055],
      },
      {
        name: "route7",
        start: [18.74607041, 98.98198974],
        end: [18.74198074, 98.97360703],
      },
      {
        name: "route8",
        start: [18.74089201, 98.96422153],
        end: [18.74858862, 99.02114197],
      },
      {
        name: "route9",
        start: [18.75035491, 99.00989555],
        end: [18.74827278, 98.94135335],
      },
      {
        name: "route10",
        start: [18.74956983, 98.94088617],
        end: [18.75688732, 98.94271103],
      },
      {
        name: "route11",
        start: [18.76480452, 98.94615387],
        end: [18.77230103, 98.95096488],
      },
      {
        name: "route12",
        start: [18.77840541, 98.95686445],
        end: [18.78678163, 98.95907044],
      },
      {
        name: "route13",
        start: [18.7487084, 98.94578741],
        end: [18.74589185, 98.95475287],
      },
      {
        name: "route14",
        start: [18.75404808, 99.02309211],
        end: [18.75094498, 99.02764811],
      },
      {
        name: "route15",
        start: [18.74749358, 99.01888111],
        end: [18.7623817, 99.02944866],
      },
      {
        name: "route16",
        start: [18.75952185, 98.99795561],
        end: [18.76532236, 98.99069054],
      },
      {
        name: "route17",
        start: [18.7678578, 98.9816221],
        end: [18.75965382, 99.03005167],
      },
      {
        name: "route18",
        start: [18.75780945, 99.00633325],
        end: [18.75873865, 99.01031072],
      },
      {
        name: "route19",
        start: [18.75892577, 99.01191689],
        end: [18.7597308, 99.03769285],
      },
      {
        name: "route20",
        start: [18.76108386, 99.01965051],
        end: [18.761483, 99.02049682],
      },
      {
        name: "route21",
        start: [18.76167935, 99.04102421],
        end: [18.7647315, 99.03663567],
      },
      {
        name: "route22",
        start: [18.76214765, 99.04050254],
        end: [18.77094279, 99.04090973],
      },
      {
        name: "route23",
        start: [18.77980802, 99.04214212],
        end: [18.76151625, 99.02083221],
      },
      {
        name: "route24",
        start: [18.76650888, 99.02890252],
        end: [18.77546722, 99.02764745],
      },
      {
        name: "route25",
        start: [18.76350937, 99.02981576],
        end: [18.76991595, 99.02853473],
      },
      {
        name: "route26",
        start: [18.77888194, 99.02734184],
        end: [18.7655381, 99.03391441],
      },
      {
        name: "route27",
        start: [18.76792818, 98.98111085],
        end: [18.76687504, 98.98667227],
      },
      {
        name: "route28",
        start: [18.7623567, 98.99473055],
        end: [18.75695144, 99.00208085],
      },
      {
        name: "route29",
        start: [18.76267826, 98.97311883],
        end: [18.75516023, 98.96785308],
      },
      {
        name: "route30",
        start: [18.74763139, 98.96260461],
        end: [18.76855438, 98.97861101],
      },
      {
        name: "route31",
        start: [18.76934635, 98.9765736],
        end: [18.77113344, 98.97581037],
      },
      {
        name: "route32",
        start: [18.76925631, 98.97703493],
        end: [18.77152938, 98.97292869],
      },
      {
        name: "route33",
        start: [18.77210289, 98.97617137],
        end: [18.78044573, 98.97723943],
      },
      {
        name: "route34",
        start: [18.77303378, 99.04165186],
        end: [18.7643046, 99.03919315],
      },
      {
        name: "route35",
        start: [18.7855237, 99.04158866],
        end: [18.79357902, 99.03729605],
      },
      {
        name: "route36",
        start: [18.78224613, 99.03291716],
        end: [18.77736477, 98.98102679],
      },
      {
        name: "route37",
        start: [18.78072809, 98.98136655],
        end: [18.78600565, 98.99305924],
      },
      {
        name: "route38",
        start: [18.79499018, 98.99341275],
        end: [18.79544667, 98.98397573],
      },
      {
        name: "route39",
        start: [18.79152063, 98.97841194],
        end: [18.78249447, 98.97797573],
      },
      {
        name: "route40",
        start: [18.78146181, 98.98680054],
        end: [18.77751247, 98.97692826],
      },
      {
        name: "route41",
        start: [18.78562349, 98.97768876],
        end: [18.77734258, 99.02787382],
      },
      {
        name: "route42",
        start: [18.76838673, 99.02914851],
        end: [18.77862215, 99.02754086],
      },
      {
        name: "route43",
        start: [18.76966159, 99.02877929],
        end: [18.78498288, 99.02653042],
      },
      {
        name: "route44",
        start: [18.79321401, 99.0227577],
        end: [18.80158001, 99.01917082],
      },
      {
        name: "route45",
        start: [18.78975531, 99.02455605],
        end: [18.79792033, 99.02052477],
      },
      {
        name: "route46",
        start: [18.78284714, 99.01763025],
        end: [18.77386132, 99.01733632],
      },
      {
        name: "route47",
        start: [18.76496213, 99.01837341],
        end: [18.78421424, 99.02310017],
      },
      {
        name: "route48",
        start: [18.78635483, 99.01205821],
        end: [18.78525354, 98.99334778],
      },
      {
        name: "route49",
        start: [18.7811017, 98.98788457],
        end: [18.78780214, 99.00159454],
      },
      {
        name: "route50",
        start: [18.78697348, 99.00516527],
        end: [18.77850364, 99.00767246],
      },
      {
        name: "route51",
        start: [18.76989034, 99.0061983],
        end: [18.76101865, 99.00638325],
      },
      {
        name: "route52",
        start: [18.79278965, 99.00192364],
        end: [18.80000158, 99.00455314],
      },
      {
        name: "route53",
        start: [18.80873223, 99.0047214],
        end: [18.78910133, 98.97106589],
      },
      {
        name: "route54",
        start: [18.790768, 98.97795464],
        end: [18.79081213, 98.96398639],
      },
      {
        name: "route55",
        start: [18.79933575, 98.96713996],
        end: [18.78362013, 98.95841097],
      },
      {
        name: "route56",
        start: [18.77734853, 98.95397296],
        end: [18.76914725, 98.95032828],
      },
      {
        name: "route57",
        start: [18.76207942, 98.94473488],
        end: [18.75503092, 98.94125213],
      },
      {
        name: "route58",
        start: [18.79013379, 98.96356024],
        end: [18.79912603, 98.9606344],
      },
      {
        name: "route59",
        start: [18.79148146, 99.03864041],
        end: [18.78316594, 99.04201608],
      },
      {
        name: "route60",
        start: [18.7955509, 98.99240258],
        end: [18.78788852, 98.99362347],
      },
      {
        name: "route61",
        start: [18.79601263, 98.97837895],
        end: [18.79660308, 98.97672582],
      },
      {
        name: "route62",
        start: [18.80101213, 98.96844211],
        end: [18.797912, 98.97443404],
      },
      {
        name: "route63",
        start: [18.80412216, 98.9626269],
        end: [18.80654928, 98.97090715],
      },
      {
        name: "route70",
        start: [18.80194326, 99.01934057],
        end: [18.79358279, 99.02294108],
      },
      {
        name: "route71",
        start: [18.78535919, 99.02674834],
        end: [18.7966529, 99.02139861],
      },
      {
        name: "route72",
        start: [18.78853545, 99.02554216],
        end: [18.80553405, 99.01724766],
      },
      {
        name: "route73",
        start: [18.80552967, 99.01705912],
        end: [18.80523639, 99.02014884],
      },
      {
        name: "route77",
        start: [18.79812583, 98.9612534],
        end: [18.80482807, 98.96150453],
      },
      {
        name: "route78",
        start: [18.80652126, 98.95815009],
        end: [18.80593621, 98.9603515],
      },
      {
        name: "route79",
        start: [18.81371906, 98.96337972],
        end: [18.82221965, 98.96518732],
      },
      {
        name: "route80",
        start: [18.8307029, 98.9635497],
        end: [18.80934437, 99.01114863],
      },
      {
        name: "route81",
        start: [18.80986581, 99.00580023],
        end: [18.80563801, 99.01735959],
      },
      {
        name: "route82",
        start: [18.80919373, 99.01307004],
        end: [18.81104579, 99.01090607],
      },
      {
        name: "route83",
        start: [18.82005986, 99.01159246],
        end: [18.80998487, 99.00157045],
      },
      {
        name: "route84",
        start: [18.81086638, 98.99621663],
        end: [18.81209768, 98.98683932],
      },
      {
        name: "route85",
        start: [18.81013176, 99.0000106],
        end: [18.81171657, 98.99066966],
      },
      {
        name: "route86",
        start: [18.80995814, 99.00703388],
        end: [18.80989014, 98.95169384],
      },
      {
        name: "route87",
        start: [18.80561341, 98.9600496],
        end: [18.81147019, 98.97950025],
      },
      {
        name: "route88",
        start: [18.81180096, 98.98279184],
        end: [18.80965232, 98.9758859],
      },
      {
        name: "route89",
        start: [18.80346563, 98.96914531],
        end: [18.80565735, 98.98536313],
      },
      {
        name: "route90",
        start: [18.81025568, 98.97693801],
        end: [18.80455513, 98.9697255],
      },
      {
        name: "route91",
        start: [18.81223453, 98.98804716],
        end: [18.81080904, 98.99740523],
      },
      {
        name: "route92",
        start: [18.8152566, 98.98273923],
        end: [18.81210937, 98.99110111],
      },
      {
        name: "route93",
        start: [18.81743102, 98.98108587],
        end: [18.8201143, 98.97209983],
      },
      {
        name: "route94",
        start: [18.81908921, 98.98118793],
        end: [18.82782778, 98.97879126],
      },
      {
        name: "route95",
        start: [18.83619794, 98.97522766],
        end: [18.82294369, 99.01320538],
      },
      {
        name: "route96",
        start: [18.8155391, 98.96329486],
        end: [18.80670836, 98.96228922],
      },
      {
        name: "route97",
        start: [18.81635336, 99.01147403],
        end: [18.82336494, 99.00955767],
      },
      {
        name: "route98",
        start: [18.83096456, 99.00493746],
        end: [18.83870067, 99.00006808],
      },
      {
        name: "route99",
        start: [18.84559383, 98.99394567],
        end: [18.82288531, 99.01480846],
      },
      {
        name: "route100",
        start: [18.83995251, 98.97388905],
        end: [18.83149385, 98.97723188],
      },
      {
        name: "route101",
        start: [18.82293862, 98.98017106],
        end: [18.81439488, 98.98323163],
      },
      {
        name: "route102",
        start: [18.83982396, 98.96534383],
        end: [18.83113955, 98.96359463],
      },
      {
        name: "route103",
        start: [18.84569018, 98.9879304],
        end: [18.84358812, 98.99604085],
      },
      {
        name: "route104",
        start: [18.83650032, 99.00192088],
        end: [18.8284626, 99.00623369],
      },
    ];;

    pointArr.forEach(async (i) => {
      try {
        const response = await fetch(
          `https://geodev.fun/pnp_api/traffic/getroute?lat=${i.start[0]}&lng=${i.start[1]}&end_lat=${i.end[0]}&end_lng=${i.end[1]}`
        );
        if (response.status === 204) {
          console.log("Skip short route:", i.name);
          return;
        }
        const result = await response.json();
        setRoutes((prev) => ({
          ...prev,
          [i.name]: { ...result, route_name: i.name },
        }));
      } catch (err) {
        console.error("Error fetching route:", i.name, err);
      }
    });
  }, []);

  const renderPopup = (route) => (
    <Popup>
      <div>
        <strong>{route.route_name || "Route"}</strong>
        <br />
        Distance: {route.distance}
        <br />
        TimeDiff: {route.time_diff}
        <br />
        Color: {route.diff_color}
        <br />
        Fetched: {route.fetch_time}
      </div>
    </Popup>
  );

  return (
    <div className="container">
      <MapContainer
        center={[18.781080789967085, 98.99286533650832]}
        zoom={13}
        className="map-container"
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG5wa3UxMDEyNDYiLCJhIjoiY21meTd6ODg4MDl1dTJqczVwcjlsN2s1ZyJ9.0XyfixgmuTzMtToTeqEnFA"
          attribution='© <a href="https://www.mapbox.com/">Mapbox</a> © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          tileSize={512}
          zoomOffset={-1}
          minZoom={0}
          maxZoom={22}
        />

        {/* line */}
        {Object.keys(routes).map((key, idx) => {
          const r = routes[key];
          if (!r.route_coords) return null;
          return (
            <Polyline
              key={idx}
              positions={r.route_coords}
              weight={4}
              color={r.diff_color || "gray"}
              opacity={0.6}
            >
              {renderPopup(r)}
            </Polyline>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Page1;
