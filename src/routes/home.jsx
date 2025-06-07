import { Illuseum } from '../Components/Projects/Illuseum';
import { Techo } from '../Components/Projects/Techo';
import { FoodFairy } from '../Components/Projects/FoodFairy';

export function RenderHome() {
    return (
        <div>
            <div>
                <Techo />
                <FoodFairy />
                <Illuseum />
            </div>
        </div>
    );
}
