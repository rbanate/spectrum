import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Table, Header, Image, Checkbox } from 'semantic-ui-react';
import EZModal from '@digix/sui-react-ezmodal';

import blockie from '~/helpers/blockie';
import QrCode from '~/components/common/qr_code';

import AddressBalances from './address_balances';

export default class KeystoreAddress extends Component {
  static propTypes = {
    address: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
  };

  render() {
    const { address, onChange, disabled } = this.props;
    return (
      <Table.Row>
        <Table.Cell width="1">
          <Header as="h4" image style={{ whiteSpace: 'nowrap' }}>
            <Image src={blockie(address.address)} shape="rounded" size="mini" />
            <Header.Content>
              {address.name}
              <Header.Subheader>
                <code style={{ fontSize: '0.8em' }}>{address.address}</code>
                <EZModal
                  size="small"
                  header={address.name}
                  content={<QrCode data={address.address} />}
                  trigger={<Icon name={'qrcode'} style={{ cursor: 'pointer' }} />}
                />
                <br />
                <Checkbox
                  radio
                  disabled={disabled}
                  onClick={onChange}
                  checked={address.isDefault}
                  style={{ fontSize: '0.8em' }}
                  label="Set as default address"
                />
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <AddressBalances address={address} />
      </Table.Row>
    );
  }
}
