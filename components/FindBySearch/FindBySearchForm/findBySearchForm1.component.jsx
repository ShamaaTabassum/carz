import { useState } from "react";
import { Form } from "reactstrap";
import FindBySearchInput from "./../findBySearchInput.component";
import FindBySearchInputRange from "./../findBySearchInputRange.component";
import FindBySearchBtn from "../findBySearchBtn.component";
import UsedCarsModel from "../../UsedCarsModel/usedCarsModel.component";

const FindBySearchFrom1 = () => {
  const [openModel, setOpenModel] = useState(false);
  const click = () => {
    console.log("open");
    setOpenModel(true);
  };
  return (
    <Form>
      <FindBySearchInput />
      <FindBySearchInputRange />
      <FindBySearchBtn text="Send Inquiry" click={click} />
      {/* {openModel && <UsedCarsModel closeModel={setOpenModel} />} */}
    </Form>
  );
};

export default FindBySearchFrom1;
