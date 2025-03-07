import { IPokemon } from "../../../../interfaces/interfaces";
import { background } from "../../../../utils/BackgroundsByType";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
  return (
    <div className={styles.types}>
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          /* @ts-expect-error: Revisar */
          style={{ background: background[name] }}
          className={styles.type}
        >
          {name}
        </div>
      ))}
    </div>
  );
};