export default function AnnonceHost(hostName, hostAvatar) {
    return (
      <div className="fiche-log-host">
        <div className="fiche-log-host__name">
          {hostName}
        </div>
        <div className="fiche-log-host__avatar">
          {hostAvatar}
        </div>
      </div>
    );
  }
  