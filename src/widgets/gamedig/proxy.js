import { GameDig } from "gamedig";

import createLogger from "utils/logger";
import getServiceWidget from "utils/config/service-helpers";

const proxyName = "gamedigProxyHandler";
const logger = createLogger(proxyName);

export default async function gamedigProxyHandler(req, res) {
  const { group, service } = req.query;
  const { serverType, url, fields, type, ...serverOptions } = await getServiceWidget(group, service);
  const serverUrl = new URL(url);

  try {
    const serverData = await GameDig.query({
      ...serverOptions,
      type: serverType,
      host: serverUrl.hostname,
      port: serverUrl.port,
      givenPortOnly: true,
      checkOldIDs: true,
    });

    res.status(200).send({
      online: true,
      name: serverData.name,
      map: serverData.map,
      players: serverData.numplayers ?? serverData.players?.length,
      maxplayers: serverData.maxplayers,
      bots: serverData.bots.length,
      ping: serverData.ping,
    });
  } catch (e) {
    if (e) logger.error(e);

    res.status(200).send({
      online: false,
    });
  }
}
