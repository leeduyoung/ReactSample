import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import {
  EnhancedGridContainer,
  EnhancedGridLeftItem,
  EnhancedGridRightItem
} from "../../components/enhanced-grid-layout/EnhancedGridLayout";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  experienceDetailContainer: {
    margin: theme.spacing(2, 4)
  },
  paper: {
    padding: theme.spacing(4)
  },
  basicPaper: {},
  pricePaper: {
    marginTop: theme.spacing(2)
  },
  detailPaper: {
    marginTop: theme.spacing(2)
  },
  content: {
    marginTop: theme.spacing(4)
  },
  textArea: {
    border: "1px solid rgba(0,0,0,0.2)"
  },
  fileDropzone: {
    width: 250,
    height: 200
  },
  buttonContainer: {
    textAlign: "right",
    marginTop: theme.spacing(2)
  },
  buttonItem: {
    margin: theme.spacing(0, 0, 0, 2)
  },
  expansionPanelSummary: {
    borderBottom: "1px solid #eee"
  }
}));

const CreateProduct = ({ product, createMode, goBack, messageRef }) => {
  // console.log("ExperienceDetail: ", product)
  const classes = useStyles();
  // const [experience, setExperience] = React.useState(product)
  const [basic, setBasic] = React.useState({
    name: "",
    summary: "",
    supply: "",
    expireDay: "",
    coverImage: "",
    state: "",
    test1: "",
    test2: "",
    test3: "",
    test4: "",
    test5: "",
    test6: "",
    test7: "",
    test8: "",
    test9: "",
    test10: ""
  });
  const [checkPoint, setCheckPoint] = React.useState({
    confirm_time: "",
    runtime: "",
    min_person: "",
    language: "",
    ticket_valid_type: "",
    cancellation: "",
    ticket_type: "",
    pickup: ""
  });

  const onBasicChange = React.useCallback(event => {
    const name = event.target.name;
    const value = event.target.value;

    setBasic(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const onCheckPointChange = React.useCallback(event => {
    const name = event.target.name;
    const value = event.target.value;

    setCheckPoint(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  return (
    <div className={classes.experienceDetailContainer}>
      <RenderBasic basic={basic} onBasicChange={onBasicChange} />
      {/* <RenderPrice /> */}
      {/* <RenderOption /> */}
      <RenderCheckPoint
        checkPoint={checkPoint}
        onCheckPointChange={onCheckPointChange}
      />

      {createMode ? (
        <AddControlButtons onCancel={goBack} />
      ) : (
        <UpdateControlButtons onCancel={goBack} />
      )}
    </div>
  );
};

export default CreateProduct;

const AddControlButtons = ({ onCancel }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button
        className={classes.buttonItem}
        color="primary"
        variant="contained"
        type="submit"
      >
        {"등록"}
      </Button>
      <Button
        className={classes.buttonItem}
        color="primary"
        variant="contained"
        onClick={onCancel}
      >
        {"취소"}
      </Button>
    </div>
  );
};
const UpdateControlButtons = ({ onCancel }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button
        className={classes.buttonItem}
        color="primary"
        variant="contained"
        type="submit"
        disabled
      >
        {"수정"}
      </Button>
      <Button
        className={classes.buttonItem}
        color="primary"
        variant="contained"
        onClick={onCancel}
      >
        {"목록"}
      </Button>
    </div>
  );
};

const CHECK_POINT_TYPES = [
  { value: "confirm_time", label: "바우처" },
  { value: "runtime", label: "소요시간" },
  { value: "min_person", label: "최소인원" },
  { value: "language", label: "사용언어" },
  { value: "ticket_valid_type", label: "티켓타입" },
  { value: "cancellation", label: "취소가능여부" },
  { value: "ticket_type", label: "사용방법" },
  { value: "pickup", label: "픽업여부" }
];

/**
 * 기본정보
 */
const RenderBasic = ({ basic, onBasicChange }) => {
  const classes = useStyles();

  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary
        className={classes.expansionPanelSummary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant={"h5"}>기본정보*</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <div className={classes.content}>
          <EnhancedGridContainer>
            <EnhancedGridLeftItem>상품명</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="name"
                name="name"
                label="name"
                variant="outlined"
                fullWidth={true}
                value={basic.name}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>

            <EnhancedGridLeftItem>상품 간단설명</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="summary"
                name="summary"
                label="summary"
                variant="outlined"
                fullWidth={true}
                value={basic.summary}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>

            <EnhancedGridLeftItem>공급처</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="supply"
                name="supply"
                label="supply"
                variant="outlined"
                fullWidth={true}
                value={basic.supply}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>

            <EnhancedGridLeftItem>유효기간</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="expireDay"
                name="expireDay"
                label="expireDay"
                variant="outlined"
                type="number"
                fullWidth={true}
                value={basic.expireDay}
                onChange={null}
                required
              />
            </EnhancedGridRightItem>

            <EnhancedGridLeftItem>test1</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test1"
                name="test1"
                label="test1"
                variant="outlined"
                fullWidth={true}
                value={basic.test1}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test2</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test2"
                name="test2"
                label="test2"
                variant="outlined"
                fullWidth={true}
                value={basic.test2}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test3</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test3"
                name="test3"
                label="test3"
                variant="outlined"
                fullWidth={true}
                value={basic.test3}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test4</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test4"
                name="test4"
                label="test4"
                variant="outlined"
                fullWidth={true}
                value={basic.test4}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test5</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test5"
                name="test5"
                label="test5"
                variant="outlined"
                fullWidth={true}
                value={basic.test5}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test6</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test6"
                name="test6"
                label="test6"
                variant="outlined"
                fullWidth={true}
                value={basic.test6}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test7</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test7"
                name="test7"
                label="test7"
                variant="outlined"
                fullWidth={true}
                value={basic.test7}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test8</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test8"
                name="test8"
                label="test8"
                variant="outlined"
                fullWidth={true}
                value={basic.test8}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test9</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test9"
                name="test9"
                label="test9"
                variant="outlined"
                fullWidth={true}
                value={basic.test9}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
            <EnhancedGridLeftItem>test10</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="test10"
                name="test10"
                label="test10"
                variant="outlined"
                fullWidth={true}
                value={basic.test10}
                onChange={onBasicChange}
                required
              />
            </EnhancedGridRightItem>
          </EnhancedGridContainer>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

/**
 * 가격정보
 */
const RenderPrice = () => {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        className={classes.expansionPanelSummary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography variant={"h5"}>가격정보*</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <div className={classes.content}>
          <EnhancedGridContainer>
            <EnhancedGridLeftItem>공급가(원)</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="supplyPrice"
                name="supplyPrice"
                label="supplyPrice"
                variant="outlined"
                type="number"
                fullWidth={true}
                value={""}
                onChange={null}
                required
              />
            </EnhancedGridRightItem>

            <EnhancedGridLeftItem>할증율(%)</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="extraRate"
                name="extraRate"
                label="extraRate"
                variant="outlined"
                type="number"
                fullWidth={true}
                value={""}
                onChange={null}
              />
            </EnhancedGridRightItem>

            <EnhancedGridLeftItem>할인율(%)</EnhancedGridLeftItem>
            <EnhancedGridRightItem>
              <TextField
                id="discountRate"
                name="discountRate"
                label="discountRate"
                variant="outlined"
                type="number"
                fullWidth={true}
                value={""}
                onChange={null}
              />
            </EnhancedGridRightItem>
          </EnhancedGridContainer>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

/**
 * 옵션정보
 */
const RenderOption = () => {
  const classes = useStyles();
  const [options, setOptions] = React.useState([]);
  console.log("options: ", options);

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        className={classes.expansionPanelSummary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography variant={"h5"}>옵션정보*</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <div className={classes.content}>
          {options.map((option, index) => {
            return (
              <div className={classes.option} key={index}>
                옵션 {index + 1}
                {/* {option.optionItems.map((item, index) => {
                  return (
                    <div className={classes.optionItem} key={index}>
                      옵션 아이템 {index + 1}
                    </div>
                  )
                })}
                <Button
                  style={{marginTop: 16}}
                  className={classes.buttonItem}
                  color="primary"
                  variant="outlined"
                  type="submit"
                  endIcon={<AddIcon />}
                  onClick={() => {}}
                >
                  {"옵션 아이템 추가"}
                </Button> */}
              </div>
            );
          })}
          <Button
            style={{ marginTop: 16 }}
            className={classes.buttonItem}
            color="primary"
            variant="outlined"
            type="submit"
            endIcon={<AddIcon />}
            onClick={() => {
              let newOptions = options.concat();
              newOptions.push({ id: options.length, optionItems: [] });
              setOptions(newOptions);
            }}
          >
            {"옵션추가"}
          </Button>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

/**
 * 체크포인트
 */
const RenderCheckPoint = ({ checkPoint, onCheckPointChange }) => {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        className={classes.expansionPanelSummary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4a-content"
        id="panel4a-header"
      >
        <Typography variant={"h5"}>체크포인트</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <div className={classes.content}>
          <EnhancedGridContainer>
            {CHECK_POINT_TYPES.map((type, index) => {
              return (
                <React.Fragment key={index}>
                  <RenderCheckPointItem
                    type={type.value}
                    title={type.label}
                    value={checkPoint[type.value]}
                    onCheckPointChange={onCheckPointChange}
                  />
                </React.Fragment>
              );
            })}
          </EnhancedGridContainer>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const RenderCheckPointItem = ({ type, title, value, onCheckPointChange }) => {
  return (
    <>
      <EnhancedGridLeftItem>{title}</EnhancedGridLeftItem>
      <EnhancedGridRightItem>
        <TextField
          id={type}
          name={type}
          label={type}
          variant="outlined"
          fullWidth={true}
          value={value}
          onChange={e => onCheckPointChange(e)}
          required
        />
      </EnhancedGridRightItem>
    </>
  );
};
