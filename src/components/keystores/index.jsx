import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message, Table, Grid, Label, Segment, Header, Icon } from 'semantic-ui-react';

import { createKeystore, updateKeystore, deleteKeystore } from '~/actions/keystore';
import { updateSession } from '~/actions/session';
import { getKeystores } from '~/selectors';

import KeystoreModal from './keystore_modal';
import KeystoreEditForm from './keystore_edit_form';
import Address from './address';
import KeystoreButtons from './keystore_buttons';

class Keystores extends Component {
  static propTypes = {
    keystores: PropTypes.array.isRequired,
    updateKeystore: PropTypes.func.isRequired,
    deleteKeystore: PropTypes.func.isRequired,
    updateSession: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { keystores } = nextProps;
    if (keystores) {
      // const addresses = [];
      const addresses = keystores.map(keystore => keystore)
        .reduce((key, keystore) => {
          keystore.addresses.map(addr => key.push(addr));
          return key;
         // return addresses;
        }, []);

      let defaultAddress;
      try {
        defaultAddress = addresses.find(address => address.isDefault);
        if (defaultAddress === undefined) {
          // console.log(addresses[0].address);
          this.props.updateSession({ defaultAddress: addresses[0].address });
        }
      } catch (e) { // do nothing
      }
    }
  }

  handleChange({ address }) {
    this.props.updateSession({ defaultAddress: address });
  }
  renderKeystores() {
    return this.props.keystores.map(keystore => (
      <Segment key={keystore.id}>
        <KeystoreModal
          {...this.props}
          header={`Edit Keystore: ${keystore.type.name}`}
          submitFunc={this.props.updateKeystore}
          removeFunc={this.props.deleteKeystore}
          data={keystore}
          form={KeystoreEditForm}
          trigger={
            <Label ribbon basic color={keystore.type.color} style={{ cursor: 'pointer' }}>
              <Icon name={keystore.type.icon} />
              {keystore.type.name}
            </Label>
          }
        />
        <Header size="tiny" disabled as="span">{keystore.type.subtitle}</Header>
        <Table basic="very">
          <Table.Body>
            {keystore.addresses.map(address => (
              <Address
                onChange={() => this.handleChange(address)}
                {...this.props}
                key={address.address}
                keystore={keystore}
                address={address}
                disabled={this.props.keystores.length === 1}
              />
            ))}
          </Table.Body>
        </Table>
      </Segment>
    ));
  }
  render() {
    return (
      <Grid>
        <Grid.Column width={6}>
          <Header>
            Keystores
            <Header.Subheader>Manage your Accounts</Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column width={10} textAlign="right">
          <KeystoreButtons {...this.props} />
        </Grid.Column>
        <Grid.Column width={16}>
          {(!this.props.keystores || this.props.keystores.length === 0) ?
            <Message
              info
              icon="key"
              header="No Keystores Created"
              content="Please create or import a new keystore"
            />
            :
            <Segment.Group style={{ background: 'white' }}>
              {this.renderKeystores()}
            </Segment.Group>
          }
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  keystores: getKeystores(state),
});

const actions = {
  createKeystore,
  updateKeystore,
  deleteKeystore,
  updateSession,
};

export default connect(mapStateToProps, actions)(Keystores);
