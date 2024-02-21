import VariablesAndConstants from "./Variables/VariablesandConstants";
import VariableTypes from "./Variables/VariableTypes";
import BooleanVariables from "./Variables/BooleanVariables";
import IfElse from "./Conditionals/IfElse";
import TernaryOperator from "./Conditionals/TernaryOperator";
import WorkingWithFunctions from "./Functions/WorkingWithFunctions";
import WorkingWithArrays from "./Arrays/WorkingWithArrays";
import TemplateLiterals from "./String/TemplateLiterals";
import House from "./Json/House";
import Spreading from "./Json/Spreading";
import Destructing from "./Json/Destructing";
import FunctionDestructing from "./Json/FunctionDestructing";

function JavaScript() {
    console.log('Hello World!')
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants />
          <VariableTypes />
          <BooleanVariables />
          <IfElse />
          <TernaryOperator />

          <WorkingWithFunctions />
          <WorkingWithArrays />

          <TemplateLiterals />

          <House />
          <Spreading />
          <Destructing />
          <FunctionDestructing />
       </div>
    );
 }
 export default JavaScript