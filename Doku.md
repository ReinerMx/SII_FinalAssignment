### Finale Abgabe SII

#### TODO's:

Einbindung des WMS / WFS:

- [Verwaltungskarten und Grenzen](https://www.bezreg-koeln.nrw.de/geobasis-nrw/produkte-und-dienste/verwaltungskarten-und-grenzen/digitale-verwaltungsgrenzen)
  - WMS Verwaltungsgrenzen DVG2: [Link zum WMS](http://www.wms.nrw.de/geobasis/wms_nw_dvg)
  - WFS Verwaltungsgrenzen DVG1 und DVG2: [Link zum WFS](https://www.wfs.nrw.de/geobasis/wfs_nw_dvg)
    - siehe "dgv1" oder "dgv2" Ordner für bereits heruntergeladene NRW-Umrisse

#### Aufgabenstellung:

Entwickeln Sie ein Anwendungsszenario, das von Daten profitiert, die über eine SII bereitgestellt werden. Definieren Sie eine spezifische Frage, die durch räumliche Daten aus einer SII beantwortet werden könnte, und identifizieren Sie die notwendigen Datensätze für diese Fragestellung. Bei der Definition Ihres Szenarios sollten Sie die folgenden Einschränkungen beachten:

1. Verwendung von Daten mindestens eines externen, interoperablen Webservices (z. B. eine Karte, Feature-Daten, Beobachtungsdaten, Abdeckung).

2. Erstellen Sie einen Datensatz eigenständig und stellen Sie diesen über eine interoperable Webservice-Schnittstelle bereit (z. B. lokal über einen Ihrer Computer, ein Webserver ist nicht notwendig); Dieser Aspekt umfasst mehrere Anforderungen:

   - Definition des Inhalts Ihres Datensatzes
   - Definition eines Ansatzes zur Speicherung und Verwaltung Ihrer Daten (z. B. Datenbank, Dateibasiert)
   - Definition der Struktur Ihres Datensatzes (Datenmodell)
   - Definition einer geeigneten Codierung für Ihre Daten (JSON/XML)
   - Generierung des Inhalts Ihres Datensatzes (einige Beispieldaten sind ausreichend; der Schwerpunkt dieser Aufgabe liegt nicht auf der Datensammlung!)
   - Einrichtung eines Datenzugriffsdienstes für Ihre Daten (z. B. eine GeoServer-Instanz auf Ihrem lokalen Computer oder ein Service über eine Plattform wie ArcGIS Online)

3. Bereitstellung einer Client-Anwendung, um sich mit diesen beiden Servern zu verbinden und die Daten zu visualisieren. Es wird empfohlen, ein Framework wie Leaflet zu verwenden. Es reicht nicht aus, Ihre Daten einfach in ein GIS zu laden.

Für diese Aufgabe können Sie neue Gruppen von bis zu vier Mitgliedern bilden.

#### Meilensteine und Lieferungen:

- Heute: Entwicklung und Diskussion erster Ideen; Feedback zu Ihren Plänen einholen
- Senden Sie die Namen aller Gruppenmitglieder an jirka@52north.org, auch wenn Ihre Gruppen unverändert bleiben sollen (bis zum 12. Januar 2024, 12:00 Uhr MEZ).
- Erste Präsentation Ihres Plans am 17. Januar: Mindestens ein Gruppenmitglied soll den geplanten Umfang des Projekts, das Anwendungsszenario, die Software und Technologien, die Sie verwenden möchten, und die Arbeitsaufteilung innerhalb Ihrer Gruppe vorstellen (maximal 5 Minuten). Basierend auf dieser Präsentation erhalten Sie Feedback, ob Ihr Plan in Ordnung ist oder ob der Umfang reduziert/erweitert werden sollte.
- Zwischenpräsentation am 24. Januar: Mindestens ein Gruppenmitglied soll die endgültige Architektur und die erreichten Ergebnisse präsentieren.
- Endpräsentation (online, Datum wird noch festgelegt): Mindestens ein Gruppenmitglied soll die endgültigen Ergebnisse einschließlich einer kurzen Demonstration präsentieren.
- Schriftliche Zusammenfassung bis zum 1. März, 18:00 Uhr MEZ: 750 Wörter, die Ihr Projekt, die Architektur und die während der Implementierung gewonnenen Erfahrungen beschreiben.
- Die endgültige Einreichung soll PDF-Versionen aller Präsentationen und des Zusammenfassungsberichts enthalten.
