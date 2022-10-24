import "./Landing.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
import Record from "../../components/Record/Record";

const Landing = ({ handleRemoveRecord, user, userProfile }) => {
  const dogIds = [
    1025, 1012, 1062, 1084, 169, 200, 219, 237, 244, 275, 40, 433, 577, 582,
    593, 611, 659, 718, 783, 790, 824, 837, 881, 937, 943,
  ];

  return (
    <main>
      {user ? (
        <>
          <div className="user-collection container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center">
                  <div className="profile-img mx-auto">
                    <Profile
                      key={userProfile}
                      profile={userProfile}
                      randDogImgId={
                        dogIds[Math.floor(Math.random() * dogIds.length)]
                      }
                    />
                  </div>
                  <div className="user-info mx-auto">
                    {userProfile?.records?.length ? (
                      <>
                        <h2>{user.name}'s Collection</h2>
                      </>
                    ) : (
                      <>
                        <h2>Start Adding To Your Collection, {user.name}!</h2>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {userProfile?.records?.map((record) => (
                <div className="col-md-4 col-sm-6 col-xs-12" key={record.id}>
                  <div className="single-record">
                    <div className="record-img">
                      <Record
                        handleRemoveRecord={handleRemoveRecord}
                        profile={userProfile}
                        id={record._id}
                        record={record}
                      />
                    </div>
                    <div className="overlay-text">
                      <h3>{record.title}</h3>
                      <p>
                        <Link
                          to="/record"
                          state={{ record }}
                          className="card-link"
                        >
                          click here
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="buttons mx-auto">
                    <Button
                      onClick={() =>
                        handleRemoveRecord(userProfile._id, record._id)
                      }
                      profile={userProfile}
                      variant="outline-success"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="user-collection container">
            <div className="results-header  text-center">
              <div className="single-record">
                <div className="record-img">
                  <img src="https://i.imgur.com/Jbr5DyI.jpg" alt="" />
                </div>
                <div className="overlay-text">
                  <h3 className="new-user"></h3>
                  <p className="new-user">Welcome to VINYLS</p>
                  <p className="new-user">Please Make an Account or Log In</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Landing;
