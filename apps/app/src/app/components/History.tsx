import { FC } from 'react';
import HistoryEntry from '../types/HistoryEntry';
import Card from './styles/Card';

type Props = {
  output: HistoryEntry[];
  handleRemoveHistoryItem: (index: number) => void;
};

const History: FC<Props> = ({ output, handleRemoveHistoryItem }) => {
  return (
    <>
      {output.map((instance: HistoryEntry, index: number) => (
        <Card>
          <div id="card-number" className="heading">
            {output.length - index}
          </div>
          <div className="timestamp">{instance.timestamp.toLocaleString()}</div>
          <div className="query">
            <div className="heading" id="query-heading">
              Query
            </div>
            {instance.query}
          </div>
          <div className="response">
            <div className="heading" id="response-heading">
              Response
            </div>
            {instance.response}
          </div>

          <table>
            <tbody>
              <tr>
                <td className="heading">Model</td>
                <td>{instance.model}</td>
              </tr>
              <tr>
                <td className="heading">Stop Reason</td>
                <td id="stop-reason-td">{instance.stopReason}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td className="heading">Temperature</td>
                <td>{instance.temperature}</td>
              </tr>
              <tr>
                <td className="heading">Frequency Penalty</td>
                <td>{instance.frequencyPenalty}</td>
              </tr>
              <tr>
                <td className="heading">Presence Penalty</td>
                <td>{instance.presencePenalty}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td className="heading">Max Tokens</td>
                <td>{instance.maxTokens}</td>
              </tr>
              <tr>
                <td className="heading">Max Cost*</td>
                <td>~${instance.maxCost}</td>
              </tr>
              <tr>
                <td className="heading">Estimated Tokens</td>
                <td>
                  {instance.response !== undefined &&
                    instance.query.length + instance.response.length / 4}
                </td>
              </tr>
              <tr>
                <td className="heading">Estimated Cost*</td>
                <td>
                  ~$
                  {instance.estimatedCost}
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>

          <button id="export-entry-button">Export Entry -implement-</button>
          <button
            id="remove-button"
            onClick={() => handleRemoveHistoryItem(index)}
          >
            Remove from History
          </button>
        </Card>
      ))}
    </>
  );
};

export default History;
