import css from './Genre.module.css'

const Genre = ({genre}) => {
    const {id, name} = genre
    return (


                <div  className={css.genre}>
                    {name}
                </div>


    );
};

export {Genre};