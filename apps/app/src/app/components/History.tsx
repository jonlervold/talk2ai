import { FC } from 'react';
import HistoryEntry from '../types/HistoryEntry';
import getEstimatedCost from '../util/getEstimatedCost';
import getMaxCost from '../util/getMaxCost';
import getModelShortName from '../util/getModelShortName';
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
                <td>{getModelShortName(instance.model)}</td>
              </tr>
              <tr>
                <td className="heading table-left-line">Stop Reason</td>
                <td id="stop-reason-td">{instance.stopReason}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td className="heading table-left-line">Temperature</td>
                <td>{instance.temperature}</td>
              </tr>
              <tr>
                <td className="heading table-left-line">Frequency Penalty</td>
                <td>{instance.frequencyPenalty}</td>
              </tr>
              <tr>
                <td className="heading table-left-line">Presence Penalty</td>
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
                <td>~${getMaxCost(instance.model, instance.maxTokens)}</td>
              </tr>
              <tr>
                <td className="heading table-left-line">Estimated Tokens</td>
                <td>
                  {instance.response !== undefined &&
                    instance.query.length + instance.response.length / 4}
                </td>
              </tr>
              <tr>
                <td className="heading table-left-line">Estimated Cost*</td>
                <td>
                  ~$
                  {instance.response !== undefined &&
                    getEstimatedCost(
                      instance.model,
                      instance.query.length + instance.response.length / 4
                    )}
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>

          {/* <table>
            <tbody>
              <tr>
                <td className="heading">Model</td>
                <td>{getModelShortName(instance.model)}</td>
                <td className="heading table-left-line">Stop Reason</td>
                <td id="stop-reason-td">{instance.stopReason}</td>
                <td className="heading table-left-line">Temperature</td>
                <td>{instance.temperature}</td>
              </tr>
              <tr>
                <td className="heading">Max Tokens</td>
                <td>{instance.maxTokens}</td>
                <td className="heading table-left-line">Estimated Tokens</td>
                <td>
                  {instance.response !== undefined &&
                    instance.query.length + instance.response.length / 4}
                </td>
                <td className="heading table-left-line">Frequency Penalty</td>
                <td>{instance.frequencyPenalty}</td>
              </tr>
              <tr>
                <td className="heading">Max Cost*</td>
                <td>~${getMaxCost(instance.model, instance.maxTokens)}</td>
                <td className="heading table-left-line">Estimated Cost*</td>
                <td>
                  ~$
                  {instance.response !== undefined &&
                    getEstimatedCost(
                      instance.model,
                      instance.query.length + instance.response.length / 4
                    )}
                </td>
                <td className="heading table-left-line">Presence Penalty</td>
                <td>{instance.presencePenalty}</td>
              </tr>
            </tbody>
          </table> */}
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
