import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLeads } from "../actions/leads";

const Leads = (props) => {
  useEffect(() => {
    props.getLeads();
  }, []);

  return (
    <>
      <h2>Leads</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {props.leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads })(Leads);
