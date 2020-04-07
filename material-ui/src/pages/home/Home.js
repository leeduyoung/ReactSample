import React from "react";
import { CssBaseline, Button } from "@material-ui/core";
import SimpleTable from "../../components/SimpleTable";
import SimpleTable2 from "../../components/SimpleTable2";
import SimpleTable3 from "../../components/SimpleTable3";
import SimpleTable4 from "../../components/SimpleTable4";
import CustomTransferList from "../../components/transfer-list/CustomTransferList";
import TransferList from "../../components/transfer-list/TransferList";
import TestModal from "../../components/layout/TestModal";
// import GridLayout from "../../components/layout/GridLayout";

const Home = () => {
  const [testModal, setTestModal] = React.useState(false);

  return (
    <div className="App">
      {"그리드 레이아웃"}
      {/* <GridLayout /> */}

      {/*
        한줄로 쭉 연결된 긴 텍스트의 경우 overflow-wrap: break-word; 속성을 사용하여
        적당히 줄바꿈을 해줘야한다.
      */}
      <div style={{ width: 300, border: "4px solid tomato" }}>
        very long text, hello loremlreos
        dlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdskl
        fjadfalsdkjflasdjfllaloremlreosdlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdsklfjadfalsdkjflasdjfllaloremlreosdlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdsklfjadfalsdkjflasdjfllaloremlreosdlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdsklfjadfalsdkjflasdjfllaloremlreosdlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdsklfjadfalsdkjflasdjflla
      </div>
      <div style={{ width: 300, border: "4px solid black" }}>
        Style sheet name: MuiTable. Style sheet details: Rule name Global class
        Description root .MuiTable-root Styles applied to the root element.
        stickyHeader .MuiTable-stickyHeader Styles applied to the root element
        if stickyHeader={true}. You can override the style of the component
        thanks to one of these customization points: With a rule name of the
        classes object prop. With a global class name. With a theme and an
        overrides property. If that's not sufficient, you can check the
        implementation of the component for more detail.
      </div>

      <div style={{ width: 850 }}>
        <h2>SIMPLE TABLE</h2>
        <CssBaseline />
        <SimpleTable />
      </div>

      <div style={{ width: 850, marginTop: 40 }}>
        <h2>SIMPLE TABLE2</h2>
        <SimpleTable2 />
      </div>

      <div style={{ width: 850, marginTop: 40 }}>
        <h2>SIMPLE TABLE3</h2>
        <SimpleTable3 />
      </div>

      <div style={{ width: 850, marginTop: 40 }}>
        <h2>SIMPLE TABLE4</h2>
        <SimpleTable4 />
      </div>

      <div style={{ width: 850, border: "1px solid gray" }}>
        <CustomTransferList />
      </div>

      <TransferList />

      <br />

      <Button variant="contained" onClick={() => setTestModal(true)}>
        OPEN TEST MODAL
      </Button>
      <TestModal open={testModal} onClose={() => setTestModal(false)} />
    </div>
  );
};
export default Home;
