import React from "react";
import { ArchiveParSession } from '../ArchiveParSession/ArchiveParSession';
import { ArchiveParProgramme } from '../ArchiveParProgramme/ArchiveParProgramme'
import '../../css/styleTableauBordGlobal.css'

export class Archives extends React.Component {

    render() {
        return (
            <>
              <div className="carteArchive">
                        <h2 className="h2Archive">Archives</h2>
                        <ArchiveParSession />
                        <ArchiveParProgramme />
                </div>

            </>
        );
    }
}
