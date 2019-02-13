import React from "react";
import { connect } from "@cerebral/react";
import {
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { state, signal } from "cerebral/tags";

export default connect(
  {
    oadaDomainText: state`connection.oada_domain_text`,
    open: state`connection.dialog_open`,

    submitClicked: signal`connection.setConnection`,
    oadaDomainChanged: signal`connection.updateOadaDomain`,
  },

  class ConnectDialog extends React.Component {
    render() {
      return (
        <Dialog open={this.props.open} className={"connection-dialog"}>
          <DialogTitle id="form-dialog-title">
            Connect to OADA Server
          </DialogTitle>
          <DialogContent>Please enter the domain of OADA server.</DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              label="Domain"
              value={this.props.oadaDomainText}
              onChange={e =>
                this.props.oadaDomainChanged({ value: e.target.value })
              }
              margin="dense"
              fullwidth="true"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.props.open = false;
              }}
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.props.submitClicked({});
              }}
              color="secondary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  },
);
