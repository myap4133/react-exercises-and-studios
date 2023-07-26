export default function HobbyLinks(){
    let hobbyLinks = ["https://www.ideal808.com/", "https://www.nintendo.com/", "https://parklaneskc.com/"];

    return (
        <div>
            <div>
                <a href={hobbyLinks[0]}>Card Games</a>
            </div>
            <div>
                <a href={hobbyLinks[1]}>Video Games</a> 
            </div>
            <div>
                <a href={hobbyLinks[2]}>Bowling</a>
            </div>
        </div>
    );
}