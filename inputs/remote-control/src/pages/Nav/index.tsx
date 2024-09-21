import { useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {

    // const channelList = ["channel1", "channel2", "channel3", "channel4"]
    const [channel, setChannel] = useState("channel1")

    function selectChannel(changeEvent: any) {
        setChannel(changeEvent.target.value)
    }

    return (
        <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
                Home
            </Link>
            <Link to="/remote" style={{ padding: 5 }}>
                Remote Control
            </Link>
            <Link to="/pictures" style={{ padding: 5 }}>
                Picture Library
            </Link>
            <Link to="/about" style={{ padding: 5 }}>
                About
            </Link>
            <label>
                1
                <input type="radio" name="channel_selector" id="1" value="channel1" checked={channel === "channel1"} onChange={selectChannel} />
            </label>
            <label>
                2
                <input type="radio" name="channel_selector" id="2" value="channel2" checked={channel === "channel2"} onChange={selectChannel} />
            </label>
            <label>
                3
                <input type="radio" name="channel_selector" id="3" value="channel3" checked={channel === "channel3"} onChange={selectChannel} />
            </label>
            <label>
                4
                <input type="radio" name="channel_selector" id="4" value="channel4" checked={channel === "channel4"} onChange={selectChannel} />
            </label>

        </nav>
    )

}

export default Nav;