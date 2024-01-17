import Button from "@material/react-button";
import Card, {
  CardActionButtons,
  CardPrimaryContent,
  CardActionIcons,
} from "@material/react-card";
import "./App.scss";
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@material/react-top-app-bar";
const App = () => {
  return (
    <>
      <div>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>Home</TopAppBarTitle>
            </TopAppBarSection>

            <TopAppBarSection>
              <TopAppBarTitle>About Us</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection>
              <TopAppBarTitle>Contact</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </div>
      <section className="container">
        <Card className="card">
          <CardPrimaryContent>
            <h3>Title</h3>
          </CardPrimaryContent>
          <CardActionIcons>
            <CardActionButtons>
              <Button raised onClick={() => console.log("clicked!")}>
                Click Me!
              </Button>
              <Button raised>Close</Button>
            </CardActionButtons>
          </CardActionIcons>
        </Card>

        <Card className="card">
          <CardPrimaryContent>
            <h3>Title</h3>
          </CardPrimaryContent>
          <CardActionIcons>
            <CardActionButtons>
              <Button raised onClick={() => console.log("clicked!")}>
                Click Me!
              </Button>
              <Button raised>Close</Button>
            </CardActionButtons>
          </CardActionIcons>
        </Card>

        <Card className="card">
          <CardPrimaryContent>
            <h3>Title</h3>
          </CardPrimaryContent>
          <CardActionIcons>
            <CardActionButtons>
              <Button raised onClick={() => console.log("clicked!")}>
                Click Me!
              </Button>
              <Button raised>Close</Button>
            </CardActionButtons>
          </CardActionIcons>
        </Card>
      </section>
    </>
  );
};

export default App;
