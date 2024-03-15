import { useAppSelector } from '../app/hooks';
import { useDispatch } from 'react-redux';
import { actions as positionActions } from '../features/position';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
export const Position = () => {
  const dispatch = useDispatch();
  const { x, y } = useAppSelector(state => state.position);

  const moveLeft = () => dispatch(positionActions.moveLeft());
  const moveRight = () => dispatch(positionActions.moveRight());
  const moveUp = () => dispatch(positionActions.moveUp());
  const moveDown = () => dispatch(positionActions.moveDown());

  const dance = async () => {
    dispatch(positionActions.moveRight());
    await wait(300);
    dispatch(positionActions.moveDown());
    await wait(300);
    dispatch(positionActions.moveLeft());
    await wait(300);
    dispatch(positionActions.moveUp());
    await wait(300);
  };

  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>{x}:{y}</strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div className="track" style={{ transform: transformValue }} onClick={dance}>
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};
