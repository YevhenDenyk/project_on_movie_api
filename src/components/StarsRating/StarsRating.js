import StarRatings from "react-star-ratings";

const StarsRating = ({vote_average}) => {
const ratings = (vote_average) / 2

    return (
        <div>
            <StarRatings
                rating= {ratings}
                starDimension="25px"
                starSpacing="0px"
                starRatedColor="gold"
            />
        </div>
    );
};

export {StarsRating};