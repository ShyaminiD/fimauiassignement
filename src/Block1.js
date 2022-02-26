import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faCoins,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";
import { DateandTimeDisplay } from "./DateandTimedisplay/DateandTimeDisplay";

export function Block1() {
  return (
    <div className="pageblk1a">
      <div className="pageblk1b">
        <div className="pageblk1c">
          <div>
            <img
              src="unsplash_rriAI0nhcbc.png"
              className="avatarimg" />
          </div>
          <div className="datetime">
            <p className="user">alfredo_rosser1</p>
            <DateandTimeDisplay />
          </div>
        </div>

        <div className="coinsblk">
          <div className="coinsblk1">
            <div className="coinsblk1a">
              <FontAwesomeIcon icon={faCoins} className="coinIcon" />
              <p className="grosscoins">2100</p>
            </div>
            <p className="gross">Gross Coins</p>
          </div>

          <FontAwesomeIcon icon={faArrowTrendUp} className="arrowIcon" />
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="ellipsisIcon" />
        </div>
      </div>
    </div>);
}
