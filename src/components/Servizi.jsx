import ProtezioneCivile from "./componentsServizi/ProtezioneCivile";
import ServizioCivile from "./componentsServizi/ServizioCivile";
import Soccorso from "./componentsServizi/Soccorso";
import Solidarietà from "./componentsServizi/Solidarietà";

const Servizi = () => {
  return (
    <div>
      <ProtezioneCivile />
      <Soccorso />
      <ServizioCivile />
      <Solidarietà />
    </div>
  );
};

export default Servizi;
