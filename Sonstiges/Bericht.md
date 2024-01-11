### Entwicklungsprojekt: Anwendungsfall, Architektur und Implementierungserfahrungen

Das vorliegende Entwicklungsprojekt konzentriert sich darauf, räumliche Daten über eine Spatial Information Infrastructure (SII) zu nutzen. Die Anwendung, die im Rahmen dieses Projekts erstellt wurde, ermöglicht es, geographische Daten zu visualisieren und spezifische Fragen durch die Analyse dieser Daten zu beantworten.

## Projektüberblick

Das Hauptziel des Projekts war die Entwicklung einer Anwendung, die von Daten profitiert, die über eine SII bereitgestellt werden. Die Anwendung sollte die folgenden Aspekte abdecken:

1. **Visualisierung von Geodaten**: Nutzung von Leaflet, einem beliebten JavaScript-Bibliothek für interaktive Karten, um Geodaten visuell darzustellen.

2. **Datenabruf von externem Webservice**: Integration von externen Geodaten über einen interoperablen Webservice. Hierfür wurde ein GeoJSON-Datensatz der Verwaltungsbezirke von Kentucky verwendet.

3. **Eigenständige Datensatzbereitstellung**: Erstellung eines eigenen Datensatzes und Bereitstellung über einen interoperablen Webservice.

4. **Einbindung von GeoServer für WMS und WFS**: Integration des GeoServers zur Darstellung einer Karte von NRW mit Verwaltungsgrenzen durch Web Map Service (WMS) und Web Feature Service (WFS).

5. **Client-Anwendung für Datenvisualisierung**: Entwicklung einer Client-Anwendung zur Verbindung mit den beiden Servern und Visualisierung der Daten.

## Architektur

Die Architektur der Anwendung umfasst verschiedene Komponenten:

- **Frontend**: Die Benutzeroberfläche der Anwendung wurde mit HTML, CSS und JavaScript erstellt. Leaflet wurde als Framework für die Kartendarstellung verwendet.

- **Webservice-Integration**: Der externe Geodatenservice wurde über die Leaflet-Bibliothek eingebunden, während der eigene Datensatz über einen lokalen Express-Server bereitgestellt wurde.

- **GeoServer-Integration**: Ein GeoServer wurde eingebunden, um Karten über die Standards WMS und WFS bereitzustellen.

- **Datenbank bzw. Dateibasierte Speicherung**: Der eigene Datensatz wurde lokal als GeoJSON-Datei gespeichert. Der GeoServer verwaltet die räumlichen Daten für die Kartenvisualisierung.

- **Datenmodell und Codierung**: Das Datenmodell wurde im GeoJSON-Format definiert, während der GeoServer WMS und WFS für die Übertragung von Kartendaten verwendete.

## Implementierungserfahrungen

Die Integration des GeoServers erweiterte die Implementierung um folgende Erfahrungen:

- **GeoServer-Konfiguration**: Die Konfiguration des GeoServers erforderte Verständnis für die Definition von Layern, die über WMS und WFS abrufbar sind.

- **WMS- und WFS-Integration**: Die Einbindung von WMS ermöglichte die Bereitstellung von Karten als Bilddateien, während WFS die Übertragung von vektorbasierten Geodaten erlaubte.

- **Client-Integration von WMS/WFS**: Die Einbindung der GeoServer-Dienste in die Client-Anwendung erfolgte durch Anpassung von Leaflet, um WMS- und WFS-Anfragen zu verarbeiten.

Die Erfahrungen mit der GeoServer-Integration erweiterten die Anwendungsfähigkeiten erheblich und ermöglichten eine umfassendere Darstellung räumlicher Daten über Standardschnittstellen.

## Fazit

Die Erweiterung um den GeoServer als zentrale Komponente zur Bereitstellung von Karten über WMS und WFS unterstreicht die Vielseitigkeit der Anwendung. Die Integration von verschiedenen Geodatendiensten bietet eine robuste Grundlage für die Lösung komplexer räumlicher Fragestellungen und eröffnet Möglichkeiten für zukünftige Erweiterungen und Anwendungen im Bereich der Geoinformatik.
